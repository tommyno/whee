import PropTypes from "prop-types";

const getUserFromAirtable = async (phone) => {
  // Check if user exist in Airtable
  // Airtable API URL Encoder: https://codepen.io/airtable/pen/rLKkYB
  const airtableUrl = `https://api.airtable.com/v0/appvw0UePoh0VxvkB/Kunder?filterByFormula=Mobil%3D${phone}`;
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
  if (airtableResult.records[0].fields.Mobil !== phone) {
    throw new Error("Nummeret stemmer ikke. Er det skrevet riktig?");
  }

  return airtableResult;
};

getUserFromAirtable.propTypes = {
  jwt: PropTypes.string.isRequired
};

export default getUserFromAirtable;
