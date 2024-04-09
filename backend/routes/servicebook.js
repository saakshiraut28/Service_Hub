/** @format */

const express = require("express");
const {
  getServicesHistory,
  getCustomerHistory,
  bookService,
} = require("../controllers/serviceBookController");
const router = express.Router();

// GET all customers who booked their service
router.get("/user/:user_id", getCustomerHistory);

// GET all services booke by customer
router.get("/provider/:provider_id", getServicesHistory);

// Book service
router.post("/", bookService);

module.exports = router;
