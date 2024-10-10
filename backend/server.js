const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS
const allowedOrigins = ["https://d3qp7ib6lsy6o7.cloudfront.net", "http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps, curl requests)
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization", "x-access-token"], // Allowed headers
    exposedHeaders: ["Authorization"], // Expose Authorization header to the client
    credentials: true, // Enable credentials (if needed)
    preflightContinue: false, // Let CORS handle the OPTIONS requests
    optionsSuccessStatus: 204, // Response status for successful OPTIONS requests
  })
);

app.use(express.json());

// Connect to MongoDB with mongoose
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Message that ensures everything is working.
app.get("/", (req, res) => {
  res.send("Express server is running and ready to receive requests");
});

// Routes (Access Points for API)
// ----------------------------------------------
// Users
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Houses (Art Houses)
const houseRoutes = require("./routes/houseRoutes");
app.use("/houses", houseRoutes);

// Events (Exhibitions)
const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);

// Comments
const commentRoutes = require("./routes/commentRoutes");
app.use("/comments", commentRoutes);

// Tickets (In Cart or Booked)
const ticketRoutes = require("./routes/ticketRoutes");
app.use("/tickets", ticketRoutes);
// ----------------------------------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
