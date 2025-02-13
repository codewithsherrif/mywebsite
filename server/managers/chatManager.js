const WebSocket = require("ws");
const { OpenAI } = require("openai");
const {
  saveMessage,
  getChatHistory,
  cleanupOldMessages,
} = require("../modules/chat/controllers/chatService");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const sessions = new Map(); // Stores active WebSocket sessions

function setupWebSocket(wss) {
  // Cleanup old messages daily
  setInterval(async () => {
    try {
      const result = await cleanupOldMessages();
      console.log(`Cleaned up ${result.deletedCount} old messages`);
    } catch (error) {
      console.error("Cleanup error:", error);
    }
  }, 24 * 60 * 60 * 1000);

  wss.on("connection", (ws, req) => {
    const sessionId = req.headers["sec-websocket-key"];
    sessions.set(sessionId, ws);

    console.log(`New connection: ${sessionId}`);

    // Load initial history
    ws.once("message", async (initialMsg) => {
      try {
        const { type, sessionId } = JSON.parse(initialMsg);
        if (type === "INIT") {
          const history = await getChatHistory(sessionId);
          ws.send(JSON.stringify({ type: "HISTORY", data: history }));
        }
      } catch (error) {
        console.error("Connection initialization failed:", error);
        ws.send(
          JSON.stringify({ type: "ERROR", message: "Initialization failed" })
        );
      }
    });

    // Handle incoming messages
    ws.on("message", async (data) => {
      try {
        const msg = JSON.parse(data);

        // Validate message
        if (!msg.type || !msg.sessionId || !msg.content) {
          throw new Error("Invalid message format");
        }

        // Save human message
        const savedMsg = await saveMessage({
          sessionId: msg.sessionId,
          content: msg.content,
          isAI: false,
        });

        // Broadcast to other clients (admin dashboard)
        broadcastToAdmins({
          type: "NEW_MESSAGE",
          data: savedMsg,
        });

        // Generate AI response
        if (msg.needsAIResponse) {
          const aiResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: msg.content }],
          });

          const aiMessage = await saveMessage({
            sessionId: msg.sessionId,
            content: aiResponse.choices[0].message.content,
            isAI: true,
          });

          ws.send(
            JSON.stringify({
              type: "MESSAGE",
              data: aiMessage,
            })
          );
        }
      } catch (error) {
        console.error("Message handling error:", error);
        ws.send(
          JSON.stringify({
            type: "ERROR",
            message: error.message || "Message processing failed",
          })
        );
      }
    });

    ws.on("close", () => {
      sessions.delete(sessionId);
      console.log(`Connection closed: ${sessionId}`);
    });
  });

  function broadcastToAdmins(message) {
    wss.clients.forEach((client) => {
      if (client.isAdmin && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  }
}

module.exports = { setupWebSocket };
