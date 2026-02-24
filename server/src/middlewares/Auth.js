import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split("")[1];

  if (!token) return res.status(401).json({ message: "Access Denied." });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid or Expired Token" });
  }
};

export default auth;
