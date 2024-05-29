const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// Get all comments or filter by eventId
router.get("/", async (req, res) => {
  try {
    const { eventId } = req.query;
    const query = eventId ? { eventId } : {};
    const comments = await Comment.find(query);
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new Comment
router.post("/addComment", async (req, res) => {
  const { eventId, userId, text, createdDate, createdTime } = req.body;

  try {
    const comment = new Comment({
      eventId,
      userId,
      text,
      createdDate,
      createdTime,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
