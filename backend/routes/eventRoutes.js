const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// GET
// -------------------------------------
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
// -------------------------------------

// UPDATE
// -------------------------------------
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
// -------------------------------------

// CREATE
// -------------------------------------
// Create a new event
router.post("/addEvent", async (req, res) => {
  const {
    artHouseId,
    title,
    description,
    location,
    startDate,
    endDate,
    startTime,
    endTime,
    ticketPrice,
    maxSeats,
    availableSeats,
    thumbnail,
    status,
  } = req.body;

  try {
    const event = new Event({
      artHouseId,
      title,
      description,
      location,
      startDate,
      endDate,
      startTime,
      endTime,
      ticketPrice,
      maxSeats,
      availableSeats,
      thumbnail,
      status,
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// -------------------------------------

// DELETE
// -------------------------------------
// Delete an event by ID
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (event) {
      res.json({ message: "Event deleted" });
    } else {
      res.status(404).send("Event not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

module.exports = router;
