import verifyUser from "utils/api/verifyUser";

export default async (req, res) => {
  try {
    const decoded = await verifyUser(req, res);
    res.status(200).json(decoded.data);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
