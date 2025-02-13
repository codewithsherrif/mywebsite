const mongoose = require("mongoose");
const registerAdmin = async (req, res) => {
  const adminiModel = mongoose.model("admini");
  const registerAdmin = await adminiModel.create({
    full_name: full_name,
    email: email,
    phone: phone,
  });
  await registerAdmin;
  res.status(200).json({
    status: "Success",
    message: `Check your Inbox, we sent the ${email}`,
  });
};
module.exports = registerAdmin;
