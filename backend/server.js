/** @format */
require("dotenv").config();
const express = require("express");
const mongo = require("mongoose");

// Initialize the express app
const app = express();

app.use("/", async (res, req) => {
  next();
});

// Routes go here

// Connect Database
mongo
  .connect()
  .then(
    app.listen(process.env.PORT, () => {
      console.log("Listening to Port 4000");
    })
  )
  .catch((error) => {
    console.log(error);
  });
