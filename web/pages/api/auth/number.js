// Send a pin (one time password) by sms
import jwt from "jsonwebtoken";

const PIN_EXPIRY = 60 * 5; // 5 minutes

export default async (req, res) => {
  try {
    // Get user mobile number
    const {
      body: { number = "" }
    } = req;

    // Throw error if mobile is missing or malformed
    // eslint-disable-next-line no-restricted-globals
    if (!number || number.length !== 8 || isNaN(number)) {
      throw new Error("Mobilnummeret mangler eller har feil format (8 siffer)");
    }

    // Check if user exist in Airtable
    // Airtable API URL Encoder: https://codepen.io/airtable/pen/rLKkYB
    const airtableUrl = `https://api.airtable.com/v0/appvw0UePoh0VxvkB/Kunder?fields%5B%5D=Mobil&filterByFormula=Mobil%3D${number}`;
    const airtableResponse = await fetch(airtableUrl, {
      cache: "no-cache",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
    });

    const airtableResult = await airtableResponse.json();

    // Error - multiple accounts
    if (airtableResult.records.length > 1) {
      throw new Error(
        "Det finnes flere brukerkonto med samme mobilnummer. Ta kontakt med oss for å rette det opp."
      );
    }

    // Error - no account
    if (airtableResult.records.length === 0) {
      throw new Error(
        "Vi kunne ikke finne noen på dette mobilnummeret. Er det skrevet riktig?"
      );
    }

    // Error - mismatch in db
    if (airtableResult.records[0].fields.Mobil !== number) {
      throw new Error("Nummeret stemmer ikke. Er det skrevet riktig?");
    }

    // All good so far, send sms pin auth code to users mobile
    const nexmoUrl = `https://api.nexmo.com/verify/json?api_key=${process.env.NEXMO_API_KEY}&api_secret=${process.env.NEXMO_API_SECRET}&number=47${number}&brand=Whee&workflow_id=6&code_length=6&brand=Whee!&pin_expiry=${PIN_EXPIRY}`;
    const nexmoResponse = await fetch(nexmoUrl);
    const nexmoResult = await nexmoResponse.json();

    // Nexmo status codes: https://help.nexmo.com/hc/en-us/articles/360025561931-Verify-Response-Codes
    // TODO: Add handlers for different Nexmo status codes...
    if (nexmoResult.status === "0") {
      // Create a signed JWT token with user mobile number
      // Needed to ensure that users mobile number is not changed in the pin-verification step
      const token = jwt.sign(
        {
          number
        },
        process.env.JWT_SECRET,
        { expiresIn: PIN_EXPIRY }
      );

      // Return everything to user
      res.status(200).json({
        message: `Suksess! En pinkode er sendt til mobilnummer: ${number}`,
        requestId: nexmoResult.request_id,
        token
      });
    } else {
      throw new Error("Noe gikk galt. Prøv igjen.");
    }

    // Return error to user
  } catch (error) {
    console.error("number.js error", error.message);
    res.status(400).json({ message: error.message });
  }
};
