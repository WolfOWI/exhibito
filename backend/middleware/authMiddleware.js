const jwt = require("jsonwebtoken");

// Middleware to authenticate and check user role
exports.authenticateRole = (rolesArray) => (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided, authorisation denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    if (rolesArray.includes(req.user.userType)) {
      next();
    } else {
      res.status(403).json({ message: "Access denied: insufficient privileges" });
    }
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
