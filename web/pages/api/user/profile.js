// Get user profile
import verifyUser from "utils/api/verifyUser";

export default async (req, res) => {
  try {
    // Get user id
    const decoded = await verifyUser(req, res);
    const { userId } = decoded.data;

    // Get data from Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Kunder";
    const url = `https://api.airtable.com/v0/${base}/${table}/${userId}`;

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

    // Return only the data we want to expose
    const result = await response.json();
    const {
      Fornavn: firstName = "",
      Etternavn: lastName = "",
      Epost: email = "",
      Mobil: phone = "",
      Adresse: adress = "",
      Postnummer: zipcode = "",
      Sted: city = "",
      "Registrert dato": created = "",
      Status: status = "",
      Ekstrautstyr: accessories = ""
    } = result.fields;

    // All good
    res.status(200).json({
      firstName,
      lastName,
      email,
      phone,
      adress,
      zipcode,
      city,
      created,
      status,
      accessories
    });
  } catch (error) {
    console.log("error", error);
    res.status(401).json({ message: error });
  }
};
