const mongoose = require("mongoose");

const saveMessage = async (sessionId, content, isAI = false) => {
  const Chat = mongoose.model("chats");
  try {
    // Validate input
    if (!sessionId || !content) {
      throw new Error("Session ID and content are required");
    }

    // Create and save message
    const newMessage = await Chat.create({
      sessionId,
      content,
      isAI,
      createdAt: new Date(),
    });

    return {
      status: "success",
      message: "Message saved successfully",
      data: newMessage,
    };
  } catch (error) {
    console.error("Message save error:", error);
    return {
      status: "error",
      message: error.message,
      code: error.name === "ValidationError" ? 400 : 500,
    };
  }
};

const getChatHistory = async (sessionId) => {
  const Chat = mongoose.model("chats");
  try {
    if (!sessionId) {
      throw new Error("Session ID is required");
    }

    const history = await Chat.find({ sessionId })
      .sort({ createdAt: 1 }) // Sort by creation time (oldest first)
      .lean(); // Convert Mongoose documents to plain JavaScript objects

    return {
      status: "success",
      results: history.length,
      data: history,
    };
  } catch (error) {
    console.error("History fetch error:", error);
    return {
      status: "error",
      message: error.message,
      code: 500,
    };
  }
};

const cleanupOldMessages = async () => {
  const Chat = mongoose.model("chats");
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const result = await Chat.deleteMany({
      createdAt: { $lt: sevenDaysAgo }, // Delete messages older than 7 days
    });

    return {
      status: "success",
      deletedCount: result.deletedCount,
    };
  } catch (error) {
    console.error("Cleanup error:", error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

module.exports = {
  saveMessage,
  getChatHistory,
  cleanupOldMessages,
};
