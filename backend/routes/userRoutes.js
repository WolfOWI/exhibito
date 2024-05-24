const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

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
router.post("/register", async (req, res) => {
  const { username, email, mobile, userType, password, artHouseId } = req.body;

  try {
    // Hash password before saving
    const salt = await bcrypt.genSalt(10); // 10 rounds
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      mobile,
      userType,
      password: hashedPassword, // store the hashed password
      artHouseId,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully", userId: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login Function
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
      // return res.status(400).json({ message: 'Invalid email or password'});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Password is wrong" });
      // return res.status(400).json({ message: 'Invalid email or password'});
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
