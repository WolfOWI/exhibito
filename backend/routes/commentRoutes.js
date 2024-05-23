const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Unflag (approve) a flagged comment (Update isFlagged to false)
router.put("/:id/unflag", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: { isFlagged: false } },
      { new: true }
    );
    if (comment) {
      res.json(comment);
    } else {
      res.status(404).send("Comment not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
