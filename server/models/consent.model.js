const mongoose = require("mongoose");

const consentSchema = new mongoose.Schema(
  {
    consent: { type: String, enum: ["accepted", "declined"], required: true },
    ip: String, // Store IP address if needed
    userAgent: String, // Store user-agent for analytics
  },
  { timestamps: true }
);

const consentModel = mongoose.model("consent", consentSchema);

module.exports = consentModel;
