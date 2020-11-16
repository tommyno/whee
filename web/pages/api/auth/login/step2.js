// Login step 2 - Verify otp sent by sms and create a jwt cookie
import Cookies from "cookies";
import jwt from "jsonwebtoken";
import getUserFromAirtable from "utils/api/getUserFromAirtable";

export default async (req, res) => {
  try {
    // Get otp and data
    const {
      body: { otp = "", requestId = "", phoneJwt = "" }
    } = req;

    // Throw error if otp or requestId is missing or malformed
    // eslint-disable-next-line no-restricted-globals
    if (!otp || otp.length !== 6 || isNaN(otp) || !requestId || !phoneJwt) {
      throw new Error("Koden mangler eller har feil format (6 siffer)");
    }

    // Verify temp jwt
    let decoded;
    try {
      decoded = jwt.verify(phoneJwt, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error("Koden er utløpt eller ugyldig.");
    }
    const { phone } = decoded;

    // Check if otp is verified
    const nexmoUrl = `https://api.nexmo.com/verify/check/json?&api_key=${process.env.NEXMO_API_KEY}&api_secret=${process.env.NEXMO_API_SECRET}&request_id=${requestId}&code=${otp}`;
    const nexmoResponse = await fetch(nexmoUrl);
    const nexmoResult = await nexmoResponse.json();

    // User is verified
    // TODO: Add handlers for different Nexmo status codes...
    // Nexmo status codes: https://help.nexmo.com/hc/en-us/articles/360025561931-Verify-Response-Codes
    if (nexmoResult.status === "0") {
      // Fetch additional user info to be used in JWT cookie
      const airtableResult = await getUserFromAirtable(phone);

      // Grab user data from Airtable
      const { id: userId, fields } = airtableResult.records[0];
      const { Fornavn: firstName, Etternavn: lastName, Epost: email } = fields;

      // Create a signed JWT token with user info
      const authToken = jwt.sign(
        {
          data: { phone, firstName, lastName, email, userId }
        },
        process.env.JWT_SECRET,
        { expiresIn: "30 days" }
      );

      // Create a cookies object, and override secure (https://github.com/pillarjs/cookies/issues/51#issuecomment-568182639)
      const cookies = new Cookies(req, res, { secure: true });
      // Set the cookie to a value
      cookies.set("authToken", authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30, // expire in 30 days,
        secure: !process.env.IS_LOCALHOST, // Disable for localhost dev
        httpOnly: true,
        SameSite: true, // = "strict"
        path: "/",
        overwrite: true
      });

      // Return cookie
      res.status(200).json({
        message: "Suksess! Du har nå fått en cookie. Nam!"
      });
    } else {
      console.error(nexmoResult);
      throw new Error("Engangskoden er ugyldig. Prøv igjen.");
    }

    // Return error to user
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).send({ message: error.message });
  }
};
