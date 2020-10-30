// Logout user
import Cookies from "cookies";

export default async (req, res) => {
  try {
    // Delete cookie
    const cookies = new Cookies(req, res);
    cookies.set("authToken");
    res.status(200).end();

    // Return error to user
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).send({ message: error.message });
  }
};
