/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const serviceBookSchema = new Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    service_id: {
      type: String,
      required: true,
    },
    provider_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BookService", serviceBookSchema);
