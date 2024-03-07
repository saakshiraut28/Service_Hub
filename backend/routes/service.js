/** @format */

const express = require("express");

const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth);

// GET all services
router.get("/", (req, res) => {
  res.json({ msg: "Get all the services" });
});

//GET a single service
router.get("/:id", (req, res) => {
  res.json({ msg: "Get a single service" });
});

// POST a new service
router.post("/", (req, res) => {
  res.json({ msg: "Create a service" });
});

// DELETE a service
router.delete("/:id", (req, res) => {
  res.json({ msg: "Delete a the service" });
});

// UPDATE a service
router.patch("/:id", (req, res) => {
  res.json({ msg: "Update a the service" });
});

module.exports = router;
