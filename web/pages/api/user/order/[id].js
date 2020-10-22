export default async (req, res) => {
  try {
    const {
      query: { id }
    } = req;

    // Check if request contains id
    if (!id) {
      throw new Error("Guid mangler");
    }

    // Get data from Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Interessenter";
    const url = `https://api.airtable.com/v0/${base}/${table}/${id}`;

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
      Epost: email = ""
    } = result.fields;

    res.status(200).json({ firstName, lastName, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
