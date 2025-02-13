const mongoose = require("mongoose");
const saveConsent = async (req, res) => {
  const consentModel = mongoose.model("consent");
  const { consent } = req.body;

  const userIp =
    req.ip || req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const newConsent = await consentModel.create({
    consent: consent,
    ip: userIp,
    userAgent: req.headers["user-agent"],
  });

  await newConsent.save();
  res.status(200).json({ status: "success", message: "Consent saved." });
};

module.exports = saveConsent;
