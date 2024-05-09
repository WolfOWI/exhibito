// TEST TO CHECK IF CONNECTION TO ATLAS WORKS

const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://21100255:Irb2WKQTn2TFekRK@exhibitocluster.mchgn27.mongodb.net/?retryWrites=true&w=majority&appName=exhibitoCluster";

// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
