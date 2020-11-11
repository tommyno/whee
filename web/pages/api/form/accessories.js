// Form for "bestill ekstrautstyr"
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
    const url = `https://api.airtable.com/v0/${base}/${table}?filterByFormula=Mobil%3D${number}`;

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
    const { guid } = result?.records[0]?.fields;

    // Get form data
    const { accessories } = req.body;

    // Format data for Airtable
    const bodyData = JSON.stringify({
      fields: {
        Ekstrautstyr: accessories
      }
    });

    // Add ordered accessories to user profile
    const urlPatch = `https://api.airtable.com/v0/${base}/${table}/${guid}`;

    const responsePatch = await fetch(urlPatch, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
      body: bodyData
    });

    // Handle errors
    if (!responsePatch.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // All good
    res.status(200).json({ message: "Success! Accessories added to user." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
