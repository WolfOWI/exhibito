const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = 3001; // Change this if you have conflicts with other services

// Replace with your MongoDB connection string
const uri =
  "mongodb+srv://21100255:Irb2WKQTn2TFekRK@exhibitocluster.mchgn27.mongodb.net/?retryWrites=true&w=majority&appName=exhibitoCluster";
const client = new MongoClient(uri);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running and ready to receive requests");
});

// Function to connect to MongoDB and perform a simple operation
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Example: retrieve the server info (you can remove or replace this part)
    const serverInfo = await client.db().admin().serverStatus();
    console.log(serverInfo);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

// Connect to MongoDB
connectToMongoDB();

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
