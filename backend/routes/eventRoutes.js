const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all houses
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
