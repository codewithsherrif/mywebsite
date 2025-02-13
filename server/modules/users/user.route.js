const express = require("express");
const auth = require("../../middleware/auth");
const registerUser = require("./controllers/registerUser");
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);

userRoutes.use(auth);

module.exports = userRoutes;
