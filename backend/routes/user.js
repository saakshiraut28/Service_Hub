/** @format */

const express = require("express");

const router = express.Router();

// login route
router.post("/login", (req, res) => {
  res.json({ msg: "User Login Successful" });
});

// signup route
router.post("/signup", (req, res) => {
  res.json({ msg: "User Signup Successful" });
});

// porfile route
router.get("/profile", (req, res) => {
  res.json({ msg: "User Profile" });
});

module.exports = router;
