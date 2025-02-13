const express = require("express");
const { saveMessage, getChatHistory } = require("./controllers/chatService");

const chatRoutes = express.Router();

// Save a new message
chatRoutes.post("", async (req, res) => {
  try {
    const { sessionId, content, isAI } = req.body;

    // Validate input
    if (!sessionId || !content) {
      return res.status(400).json({
        status: "error",
        message: "Session ID and content are required",
      });
    }

    // Save the message
    const result = await saveMessage(sessionId, content, isAI);

    if (result.status === "error") {
      return res.status(result.code || 500).json(result);
    }

    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

// Fetch chat history
chatRoutes.get("", async (req, res) => {
  try {
    const { sessionId } = req.query;

    // Validate input
    if (!sessionId) {
      return res.status(400).json({
        status: "error",
        message: "Session ID is required",
      });
    }

    // Fetch chat history
    const result = await getChatHistory(sessionId);

    if (result.status === "error") {
      return res.status(result.code || 500).json(result);
    }

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching chat history:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});

module.exports = chatRoutes;
