import jwt from "jsonwebtoken";

export default async (req, res) => {
  try {
    // Get user pin and data
    const {
      body: { pin = "", requestId = "", token = "" }
    } = req;

    // Throw error if pin or requestId is missing or malformed
    // eslint-disable-next-line no-restricted-globals
    if (!pin || pin.length !== 6 || isNaN(pin) || !requestId || !token) {
      throw new Error("Koden mangler eller har feil format (6 siffer)");
    }

    // Throw error if jwt token with mobile number has been tampered or has expired
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      throw new Error(error);
    }

    if (!decoded) {
      throw new Error("JWT token er ugyldig");
    }

    // Extract verified number from decoded jwt
    const { number } = decoded;

    // Check if pin is verified
    const nexmoUrl = `https://api.nexmo.com/verify/check/json?&api_key=${process.env.NEXMO_API_KEY}&api_secret=${process.env.NEXMO_API_SECRET}&request_id=${requestId}&code=${pin}`;
    const nexmoResponse = await fetch(nexmoUrl);
    const nexmoResult = await nexmoResponse.json();

    // User is verified
    // TODO: Add handlers for different Nexmo status codes...
    // Nexmo status codes: https://help.nexmo.com/hc/en-us/articles/360025561931-Verify-Response-Codes
    if (nexmoResult.status === "0") {
      // Create a JWT token with users mobile number
      const authToken = jwt.sign(
        {
          data: { number }
        },
        process.env.JWT_SECRET,
        { expiresIn: "30 days" }
      );

      // Create a cookie
      res.cookie("authToken", authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30, // expire in 30 days,
        secure: !process.env.IS_LOCALHOST, // Disable for localhost dev
        httpOnly: true,
        SameSite: "Strict",
        path: "/"
      });

      // Return cookie
      res.status(200).json({
        message: "Suksess! Du har nå fått en cookie. Nam!"
      });
    } else {
      throw new Error("Pinkoden stemmer ikke, eller er utgått");
    }

    // Return error to user
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send({ errorMessage: error.message });
  }
};
