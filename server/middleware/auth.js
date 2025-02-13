const jsonwebtoken = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // Check if Authorization header exists
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Authorization header missing or improperly formatted");
    }

    // Extract the token
    const accessToken = authHeader.split(" ")[1];

    // Verify the token (will throw an error if invalid or expired)
    const JWTverification = jsonwebtoken.verify(
      accessToken,
      process.env.jwt_salt
    );

    console.log("Verified JWT Payload:", JWTverification);

    // Attach verified user payload to the request object
    req.user = JWTverification;

    // Call the next middleware
  } catch (e) {
    // Handle errors gracefully

    res.status(401).json({
      status: "failed",
      message: "Unauthorized access",
    });
    return;
  }

  next();
};

module.exports = auth;
