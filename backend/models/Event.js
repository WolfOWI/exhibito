const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  ticketPrice: { type: Number, required: true },
  maxSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  status: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
