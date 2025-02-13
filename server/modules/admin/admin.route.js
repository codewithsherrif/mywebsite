const express = require("express");
const auth = require("../../middleware/auth");
const registerAdmin = require("./controllers/registerAdmin");
const adminRoutes = express.Router();

adminRoutes.post("/register", registerAdmin);

adminRoutes.use(auth);

module.exports = adminRoutes;
