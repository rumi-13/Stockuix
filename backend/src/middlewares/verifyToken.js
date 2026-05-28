
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.verifyToken = (req, res, next) => {
  const cookieHeader = req.headers.cookie || "";
  const tokenMatch = cookieHeader.match(/(?:^|;\s*)token=([^;]+)/);
  const token = tokenMatch ? decodeURIComponent(tokenMatch[1]) : null;

  if (!token) {
    return res.status(401).json({
      message: "Authentication required.",
      error: "NO_TOKEN",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Session expired. Please log in again.",
        error: "TOKEN_EXPIRED",
      });
    }

    return res.status(400).json({
      message: "Invalid authentication token.",
      error: "INVALID_TOKEN",
    });
  }
};
