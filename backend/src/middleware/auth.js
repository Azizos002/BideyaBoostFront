const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Insufficient permissions" });
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRoles };

// In this file, we have two middleware functions:  authenticateToken  and  authorizeRoles .
// The  authenticateToken  function is used to authenticate the user by verifying the JWT token. If the token is valid, the user object is added to the request object, and the next middleware function is called. Otherwise, an error message is returned.
// The  authorizeRoles  function is used to authorize the user based on their role. It takes
// a list of roles as arguments and checks if the user's role is included in the list. If the user's role is included, the next middleware function is called. Otherwise, an error message is returned.
// These middleware functions will be used to protect the routes that require authentication and authorization in the application.

