const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: [true, "Session ID is required"],
    index: true,
  },
  content: {
    type: String,
    required: [true, "Message content is required"],
  },
  isAI: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: { expires: "7d" }, // Auto-delete after 7 days
  },
});

module.exports = mongoose.model("chats", chatSchema);
