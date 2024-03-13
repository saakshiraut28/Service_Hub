/** @format */

const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ err: "Please enter all the fields." });
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ err: "User not found." });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.status(400).json({ err: "Incorrect Credentials" });
  }

  res.status(200).json(user);
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ err: "Please enter all the fields." });
  }
  const userExist = await User.findOne({ email });
  if (!userExist) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = User.create({ name, email, password: hash });
    res.status(200).json(user);
  } else {
    res.status(400).json({ err: "User already exist" });
  }
};

const profile = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    res.status(200).json({ err: "User not found." });
  } else {
    res.status(200).json(user);
  }
};

module.exports = { login, signup, profile };
