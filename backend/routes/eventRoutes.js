const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single event by ID
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Approve an event (Update event.status to "Approved")
router.put("/:id/approve", async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: { status: "Approved" } },
      { new: true }
    );

    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
