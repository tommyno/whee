// Form for "bestill ekstrautstyr"
import verifyUser from "utils/api/verifyUser";

export default async (req, res) => {
  try {
    // Get user data
    const decoded = await verifyUser(req, res);
    const { userId } = decoded.data;

    // Get form data
    const { accessories } = req.body;

    // Format data for Airtable
    const bodyData = JSON.stringify({
      fields: {
        Ekstrautstyr: accessories
      }
    });

    // Add ordered accessories to users profile
    const base = "appvw0UePoh0VxvkB";
    const table = "Kunder";
    const url = `https://api.airtable.com/v0/${base}/${table}/${userId}`;

    const response = await fetch(url, {
      method: "patch",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
      body: bodyData
    });

    // Handle errors
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    // All good
    res.status(200).json({ message: "Success! Accessories added to user." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
