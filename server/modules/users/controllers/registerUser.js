const mongoose = require("mongoose");
const registerUser = async (req, res) => {
  const { full_name, email, phone } = req.body;
  const userModel = mongoose.model("user");
  const registerUser = await userModel.create({
    full_name: full_name,
    email: email,
    phone: phone,
  });
  await registerUser;
  res.status(200).json({
    status: "Success",
    message: `Check your Inbox, we sent the ${email}`,
  });
};
module.exports = registerUser;
