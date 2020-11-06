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

    // All good
    res.status(200).json({ message: "User is authenticated" });
  } catch (error) {
    res.status(401).json({ message: error });
  }
};
