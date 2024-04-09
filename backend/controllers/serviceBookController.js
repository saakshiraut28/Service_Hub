/** @format */

const BookService = require("../models/serviceBooked");
const Service = require("../models/serviceModel");
const mongoose = require("mongoose");

const getServicesHistory = async (req, res) => {
  const user_id = req.params.user_id;
  if (!mongoose.Types.ObjectId.isValid(user_id)) {
    return res.status(400).json({ err: "User not found : Incorrect Id" });
  }

  try {
    // Find all services booked by the current user
    const bookings = await BookService.find({ user_id });

    // Extract service ids from the bookings
    const serviceIds = bookings.map((booking) => booking.service_id);

    // Fetch details of the services booked by the user
    const services = await Service.find({ _id: { $in: serviceIds } });

    res.status(200).json({ services });
  } catch (error) {
    console.error("Error fetching services history:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCustomerHistory = async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });
  res.status(200).json(services);
};

const bookService = async (req, res) => {
  const { user_id, service_id, provider_id } = req.body;

  // Validate user_id, service_id, and provider_id
  if (
    !mongoose.Types.ObjectId.isValid(user_id) ||
    !mongoose.Types.ObjectId.isValid(service_id) ||
    !mongoose.Types.ObjectId.isValid(provider_id)
  ) {
    return res
      .status(400)
      .json({ err: "Invalid user, service, or provider ID" });
  }

  try {
    // Check if the service exists
    const service = await Service.findById(service_id);
    if (!service) {
      return res.status(404).json({ err: "Service not found" });
    }

    // Create a new booking
    const booking = new BookService({
      user_id,
      service_id,
      provider_id,
    });

    // Save the booking
    await booking.save();

    res.status(201).json({ message: "Service booked successfully", booking });
  } catch (error) {
    console.error("Error booking service:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getServicesHistory,
  getCustomerHistory,
  bookService,
};
