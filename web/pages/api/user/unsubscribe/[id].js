// Unsubscribe user by id
export default async (req, res) => {
  try {
    const {
      query: { id }
    } = req;

    // Check if request contains id
    if (!id) {
      throw new Error("Guid mangler");
    }

    // Format data for Airtable
    const bodyData = JSON.stringify({
      fields: {
        Status: "inaktiv"
      }
    });

    // Patch data to Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Interessenter";
    const url = `https://api.airtable.com/v0/${base}/${table}/${id}`;

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
    res.status(200).json({ message: "Success! User is updated" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
