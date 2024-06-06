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

module.exports = router;
