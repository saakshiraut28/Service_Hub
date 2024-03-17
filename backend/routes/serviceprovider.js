/** @format */

const express = require("express");
const {
  login,
  signup,
  profile,
  getProfile,
} = require("../controllers/serviceProviderControllers");

const router = express.Router();

// login route
router.post("/login", login);

// signup route
router.post("/signup", signup);

// porfile route
router.get("/profile/:id", profile);

// porfile
router.get("/profiles/", getProfile);

module.exports = router;
