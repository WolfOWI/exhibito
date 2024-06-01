const express = require("express");
const router = express.Router();
const House = require("../models/House");

// Get all houses
router.get("/", async (req, res) => {
  try {
    const houses = await House.find();
    res.json(houses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get house by ID
router.get("/:id", async (req, res) => {
  try {
    const house = await House.findById(req.params.id);
    if (!house) {
      return res.status(404).json({ message: "House not found" });
    }
    res.json(house);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
