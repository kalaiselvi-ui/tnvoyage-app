import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    // Verify token safely inside try block
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user payload (id, role, etc.) directly to the request object
    req.user = decoded;

    next();
  } catch (error) {
    // Catches expired or tampered tokens
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};
