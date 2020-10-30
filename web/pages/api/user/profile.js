// Get user profile
import Cookies from "cookies";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  try {
    // Get auth token from cookie
    const cookies = new Cookies(req, res);
    const authToken = cookies.get("authToken");

    // Verify auth token
    // Throw error if jwt token with mobile number has been tampered or has expired
    let decoded;
    try {
      decoded = jwt.verify(authToken, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error("Ugyldig token");
    }
    if (!decoded) {
      throw new Error("Ugyldig token");
    }

    // Extract verified number from decoded jwt
    const { number } = decoded?.data;

    // Get data from Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Kunder";
    const url = `https://api.airtable.com/v0/${base}/${table}?filterByFormula%3D%22Mobil%3D%22${number}%22`;

    const response = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      }
    });

    // Handle errors
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // Return only the data we need to expose
    const result = await response.json();
    const {
      Fornavn: firstName = "",
      Etternavn: lastName = "",
      Mobil: mobile = "",
      Epost: email = "",
      Adresse: adress = "",
      Postnummer: zip = "",
      "Registrert dato": created = "",
      Status: status = ""
    } = result?.records[0]?.fields;

    // All good
    res.status(200).json({
      firstName,
      lastName,
      email,
      mobile,
      adress,
      zip,
      created,
      status
    });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
