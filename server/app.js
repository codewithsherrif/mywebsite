require("express-async-errors");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http");
const WebSocket = require("ws");
const cookieParser = require("cookie-parser");

const errorHandler = require("./handlers/errorHandler");
const userRoutes = require("./modules/users/user.route");
const adminRoutes = require("./modules/admin/admin.route");
const chatRoutes = require("./modules/chat/chat.route");
const consentRoutes = require("./modules/consent/consent.route");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Adjust origin for production
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    tlsAllowInvalidCertificates: true, // Only use this if testing locally with self-signed certs
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// Models Initialization
require("./models/user.model");
require("./models/admin.model");
require("./models/chat.model");
require("./models/consent.model");

// Routes
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/consent", consentRoutes);

// Handle 404
app.all("*", (req, res, next) => {
  res.status(404).json({ status: "failed", message: "Not found" });
});

// Error Handler
app.use(errorHandler);

// WebSocket Logic (Real-time Chat)
const { setupWebSocket } = require("./managers/chatManager");
setupWebSocket(wss);

// Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
