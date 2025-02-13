const express = require("express");
const saveConsent = require("./controllers/Consent");
const consentRoutes = express.Router();

consentRoutes.post("/", saveConsent);

module.exports = consentRoutes;
