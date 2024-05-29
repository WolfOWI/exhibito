const { expressjwt: expressJwt } = require("express-jwt");

// Middleware to validate token
function requireAuth() {
  return expressJwt({
    // Validating JWTs found in the Authorisation header of incoming requests
    secret: process.env.JWT_SECRET, // The Secret Key
    algorithms: ["HS256"], // The algorithm allowed for decoding the JWT
    requestProperty: "auth", // This adds the decoded JWT payload to req.auth
  });
}

module.exports = { requireAuth };
