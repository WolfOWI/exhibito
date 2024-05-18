const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new User
router.post('/register', async (req, res ) => {
  const { username, email, mobile, userType, password } = req.body;

  try {
    const user = new User({ username, email, mobile, userType, password});
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message})
  }
});

module.exports = router;
