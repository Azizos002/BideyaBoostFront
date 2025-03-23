const express = require("express");
const cors = require("cors");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const authRoutes = require("./src/routes/auth");
const userRoutes = require("./src/routes/users");
const meetingRoutes = require("./src/routes/meetings");
// const progressRoutes = require("./src/routes/progress");
const contactRoute = require("./src/routes/contactRoute");
const { authenticateToken } = require("./src/middleware/auth");
const connectDB = require("./src/config/db");


require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: {
  origin: process.env.URL,
  credentials: true
} });

app.use(express.static(path.join(__dirname, "out")));

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/meetings", authenticateToken, meetingRoutes);
app.use("/api/progress", authenticateToken, progressRoutes);
app.use("/api", contactRoute)

// WebSocket for real-time notifications
io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("sendNotification", (data) => {
    io.emit("receiveNotification", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "out", "index.html"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Models
// const User = require("./src/models/User");
// const Meeting = require("./src/models/Meeting");

// Middleware
// const authMiddleware = require("./src/middleware/auth");
