const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// GET
// -------------------------------------
// GET tickets by user ID and status with populated event details
router.get("/", async (req, res) => {
  const { userId, status } = req.query;
  try {
    const tickets = await Ticket.find({ userId, status });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

// CREATE
// -------------------------------------
// Create a new ticket
router.post("/addTicket", async (req, res) => {
  const { eventId, userId, status } = req.body;

  try {
    const ticket = new Ticket({
      eventId,
      userId,
      status,
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// -------------------------------------

// UPDATE
// -------------------------------------
// Update ticket status
router.put("/:id/updateStatus", async (req, res) => {
  try {
    const { status } = req.body;
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!ticket) {
      return res.status(404).send("Ticket not found");
    }
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

// DELETE
// -------------------------------------
// Delete an ticket by ID
router.delete("/:id", async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (ticket) {
      res.json({ message: "Ticket deleted" });
    } else {
      res.status(404).send("Ticket not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

module.exports = router;
