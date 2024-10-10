const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure CORS to allow all origins and allow specific headers
app.use(
  cors({
    origin: "*", // Allow any origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Ensure Content-Type is allowed
    credentials: true, // Enable credentials (if needed)
    preflightContinue: false, // Automatically handle OPTIONS preflight
    optionsSuccessStatus: 204, // Some legacy browsers choke on 204
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
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

const houseRoutes = require("./routes/houseRoutes");
app.use("/houses", houseRoutes);

const eventRoutes = require("./routes/eventRoutes");
app.use("/events", eventRoutes);

const commentRoutes = require("./routes/commentRoutes");
app.use("/comments", commentRoutes);

const ticketRoutes = require("./routes/ticketRoutes");
app.use("/tickets", ticketRoutes);
// ----------------------------------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
