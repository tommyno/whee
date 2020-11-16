// Login step 1 - Send a otp (one time password) to users mobile number
import jwt from "jsonwebtoken";
import getUserFromAirtable from "utils/api/getUserFromAirtable";

const PIN_EXPIRY = 60 * 5; // 5 minutes

export default async (req, res) => {
  try {
    // Get user mobile number
    const {
      body: { phone = "" }
    } = req;

    // Throw error if mobile is missing or malformed
    // eslint-disable-next-line no-restricted-globals
    if (!phone || phone.length !== 8 || isNaN(phone)) {
      throw new Error("Mobilnummeret mangler eller har feil format (8 siffer)");
    }

    // Check if user exists in airtable, throws error if not
    await getUserFromAirtable(phone);

    // All good so far, send sms otp to users mobile
    const nexmoUrl = `https://api.nexmo.com/verify/json?api_key=${process.env.NEXMO_API_KEY}&api_secret=${process.env.NEXMO_API_SECRET}&number=47${phone}&brand=Whee&workflow_id=6&code_length=6&brand=Whee!&pin_expiry=${PIN_EXPIRY}`;
    const nexmoResponse = await fetch(nexmoUrl);
    const nexmoResult = await nexmoResponse.json();

    // Nexmo status codes: https://help.nexmo.com/hc/en-us/articles/360025561931-Verify-Response-Codes
    if (nexmoResult.status === "0") {
      // Create a signed JWT token with user mobile number
      // This is used as a temp storage, to ensure that users mobile number is not changed in the pin-verification step
      const phoneJwt = jwt.sign(
        {
          phone
        },
        process.env.JWT_SECRET,
        { expiresIn: PIN_EXPIRY }
      );

      // Return everything to user
      res.status(200).json({
        message: `Suksess! En pinkode er sendt til mobilnummer: ${phone}`,
        requestId: nexmoResult.request_id,
        phoneJwt
      });
    } else {
      throw new Error("Noe gikk galt. Prøv igjen.");
    }

    // Return error to user
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};
