// Sjekk struktur på mobilnr
// Sjekk om det finnes i Airtable
// Send en otp kode til mobilnr
// Vis nytt skjema

export default async (req, res) => {
  try {
    // Get user mobile
    const {
      query: { number = "" }
    } = req;

    // Throw error if mobile is missing or malformed
    // eslint-disable-next-line no-restricted-globals
    if (!number || !number.length === 8 || isNaN(number)) {
      throw new Error("Mobilnummeret mangler eller har feil format (8 siffer)");
    }

    // Check if user exist in Airtable
    // Airtable API URL Encoder: https://codepen.io/airtable/pen/rLKkYB
    // TODO: Also check if user is a customer / has a bike
    const airtableUrl = `https://api.airtable.com/v0/appvw0UePoh0VxvkB/Interessenter?fields%5B%5D=Mobil&filterByFormula=Mobil%3D${number}`;
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
        "Det finnes flere brukerkonto med samme mobilnummer. Vennligst ta kontakt med oss for å rette opp."
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

    // All good so far, authenticate user
    res.status(200).send({ "user number": number });

    // Return error to user
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({ errorMessage: error.message });
  }
};
