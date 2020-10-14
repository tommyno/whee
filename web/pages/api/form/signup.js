export default async (req, res) => {
  try {
    // Get form data
    const { name, email, message, honningkrukke } = req.body;

    // Check if honeypot is filled
    if (honningkrukke !== "") {
      throw new Error("Die spambot, die");
    }

    // Format data for Airtable
    const bodyData = JSON.stringify({
      fields: {
        Navn: name,
        Epost: email,
        "Beskjed fra skjema": message,
        "Registrert dato": new Date()
      }
    });

    // Post data to Airtable
    const base = "appvw0UePoh0VxvkB";
    const table = "Interessenter";
    const url = `https://api.airtable.com/v0/${base}/${table}`;

    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`
      },
      body: bodyData
    });

    if (response.ok) {
      res.status(200).json({ message: "Success! User created" });
    }

    // Something went wrong
    throw new Error("Something went wrong");
  } catch (error) {
    res.status(500).end();
  }
};
