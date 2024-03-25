/** @format */
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongo = require("mongoose");
const service = require("./routes/service");
const userRoutes = require("./routes/user");
const serviceProviderRoutes = require("./routes/serviceprovider");

// Initializing express App
const app = express();

// Allow requests from all origins
app.use(cors());

// Add Content-Type to the list of allowed headers
app.options(
  "*",
  cors({
    allowedHeaders: ["Content-Type"],
  })
);

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
