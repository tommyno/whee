export default async (req, res) => {
  try {
    // Get form data
    const {
      name,
      email,
      mobile,
      adress,
      zipcode,
      message,
      honningkrukke
    } = req.body;

    // Check if honeypot is filled
    if (honningkrukke !== "") {
      throw new Error("Die spambot, die");
    }

    // Split name into first and last
    const fullName = name.split(" ");
    const firstName = fullName[0];
    const lastName = fullName[fullName.length - 1];

    // Format data for Airtable
    const bodyData = JSON.stringify({
      fields: {
        Fornavn: firstName,
        Etternavn: lastName,
        Epost: email,
        Mobil: mobile,
        Adresse: adress,
        Postnummer: zipcode,
        Status: "Bestilt",
        "Beskjed fra skjema": message,
        "Registrert dato": new Date()
      }
    });

    // Post data to Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Kunder";
    const url = `https://api.airtable.com/v0/${base}/${table}`;

    const response = await fetch(url, {
      method: "post",
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
    res.status(200).json({ message: "Success! User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
