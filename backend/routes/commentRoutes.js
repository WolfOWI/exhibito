const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

// GET
// -------------------------------------
// Get all comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all comments by event ID
router.get("/event/:eventId", async (req, res) => {
  try {
    const { eventId } = req.params;
    const comments = await Comment.find({ eventId });
    if (comments.length > 0) {
      res.json(comments);
    } else {
      res.status(404).send("No comments found for this event");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

// CREATE
// -------------------------------------
// Create a new Comment
router.post("/addComment", async (req, res) => {
  const { eventId, userId, text, isFlagged, createdDate, createdTime } = req.body;

  try {
    const comment = new Comment({
      eventId,
      userId,
      text,
      isFlagged,
      createdDate,
      createdTime,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
// -------------------------------------

// UPDATE
// -------------------------------------
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

// Flag a comment (Update isFlagged to true)
router.put("/:id/flag", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: { isFlagged: true } },
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
// -------------------------------------

// DELETE
// -------------------------------------
// Delete a comment by ID
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (comment) {
      res.json({ message: "Comment deleted" });
    } else {
      res.status(404).send("Comment not found");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// -------------------------------------

module.exports = router;
