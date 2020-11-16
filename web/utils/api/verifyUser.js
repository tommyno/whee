import PropTypes from "prop-types";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

const verifyUser = async (req, res) => {
  // Get auth token from cookie
  const cookies = new Cookies(req, res);
  const authToken = cookies.get("authToken");

  // Verify token and return decoded data
  let decoded;
  try {
    decoded = jwt.verify(authToken, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error("Koden er utløpt eller ugyldig.");
  }

  if (!decoded) {
    throw new Error("Koden er utløpt eller ugyldig.");
  }

  return decoded;
};

verifyUser.propTypes = {
  jwt: PropTypes.string.isRequired
};

export default verifyUser;
