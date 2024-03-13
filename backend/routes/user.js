/** @format */

const express = require("express");
const { login, signup, profile } = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", login);

// signup route
router.post("/signup", signup);

// porfile route
router.get("/profile/:id", profile);

module.exports = router;
