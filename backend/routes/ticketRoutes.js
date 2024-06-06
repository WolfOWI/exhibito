const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket");

// GET
// -------------------------------------
// Get all Tickets
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.find();
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

module.exports = router;
