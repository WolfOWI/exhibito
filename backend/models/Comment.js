const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  text: { type: String, required: true },
  isFlagged: { type: Boolean, required: true },
  createdDate: { type: String, required: true },
  createdTime: { type: String, required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
