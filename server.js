// Server File for running Express Server

// Import express library (a node.js framework)
const express = require("express");

// Import the MongoClient from the MongoDB library (to connect to MongoDB)
const { MongoClient } = require("mongodb");

// CORS error prevention
const cors = require("cors");

// Creates the express application - app is an object with methods that can do various HTTP methods (GET, POST, etc)
const app = express();
const PORT = 3001;

// Use CORS middleware
app.use(cors());

// The "url" to connect to the cluster (including username & password)
const uri =
  "mongodb+srv://21100255:Irb2WKQTn2TFekRK@exhibitocluster.mchgn27.mongodb.net/?retryWrites=true&w=majority&appName=exhibitoCluster";
const client = new MongoClient(uri);

// "Middleware" that tells the express app to translate JSON data from MongoDB
app.use(express.json());

// When on root URL, shows that express server is working
app.get("/", (req, res) => {
  res.send("Express server is running and ready to receive requests");
});

// Connecting to MongoDB
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}
connectToMongoDB();

// Users API endpoint
app.get("/users", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("exhibito");
    const collection = db.collection("users");
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error("Failed to fetch data", error);
    res.status(500).send("Failed to fetch data");
  }
});

// Start the Express server & listens to any requests from the "3001" port.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
