/** @format */

const Service = require("../models/serviceModel");
const mongoose = require("mongoose");

const getServices = async (req, res) => {
  const services = await Service.find().sort({ createdAt: -1 });

  res.status(200).json(services);
};

const getService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ err: "Service not found : Incorrect Id" });
  }
  try {
    const service = await Service.findById(id);
    res.status(200).json({ service });
  } catch (error) {
    res.status(400).json({ err: "Service not found" });
  }
};

const addService = async (req, res) => {
  const { title, category, description, feedback } = req.body;
  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!category) {
    emptyFields.push("category");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (!feedback) {
    emptyFields.push("feedback");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }
  try {
    const service = await Service.create({
      title,
      category,
      description,
      feedback,
    });
    res.status(200).json({ service });
  } catch {
    res.status(400).json({ err: "Something went wrong." });
  }
};

const deleteService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ err: "Service not found : Incorrect Id" });
  }
  const service = await Service.findById(id);

  if (!service) {
    res.status(400).json({ err: "Service not found" });
  }
  const delservice = await Service.findByIdAndDelete(id);
  res.status(200).json(delservice);
};
const updateService = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ err: "Service not found : Incorrect Id" });
  }
  const service = await Service.findById(id);
  if (!service) {
    res.status(400).json({ err: "Service not found" });
  }
  const updateservice = await Service.findByIdAndUpdate(id, req.body);
  res.status(200).json(updateservice);
};

module.exports = {
  getServices,
  getService,
  addService,
  deleteService,
  updateService,
};
