const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
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
