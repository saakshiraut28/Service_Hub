/** @format */

const express = require("express");
const {
  getServices,
  getService,
  getProviderService,
  addService,
  deleteService,
  updateService,
} = require("../controllers/serviceController");
const router = express.Router();

// require auth for all workout routes
// router.use(requireAuth);

// GET all services
router.get("/", getServices);

//GET a single service
router.get("/:id", getService);

// GET provider's service
router.get("/sp/:id", getProviderService);

// POST a new service
router.post("/", addService);

// DELETE a service
router.delete("/:id", deleteService);

// UPDATE a service
router.patch("/:id", updateService);

module.exports = router;
