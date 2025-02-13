const jsonwebtoken = require("jsonwebtoken");
const jwtManager = (user) => {
  const accessToken = jsonwebtoken.sign(
    {
      _id: user._id,
      first_name: user.first_name,
      phone: user.phone,
      email: user.email,
    },
    process.env.jwt_salt, // Use your secret key
    { expiresIn: "1h" } // Token expiration time
  );

  return accessToken;
};

module.exports = jwtManager;
