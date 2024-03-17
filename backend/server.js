/** @format */
require("dotenv").config();

const express = require("express");
const mongo = require("mongoose");
const service = require("./routes/service");
const userRoutes = require("./routes/user");
const serviceProviderRoutes = require("./routes/serviceprovider");

// Initializing express App
const app = express();

// Create middleware kinda thing
app.use(express.json()); // Will help us to pass JSON object on request

app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// Routes
app.use("/api/service", service);
app.use("/api/user", userRoutes);
app.use("/api/spuser", serviceProviderRoutes);

// Connect DB
mongo
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
