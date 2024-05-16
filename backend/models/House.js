const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
});

module.exports = mongoose.model("House", houseSchema);
