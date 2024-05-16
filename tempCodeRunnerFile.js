const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://21100255:Irb2WKQTn2TFekRK@exhibitocluster.mchgn27.mongodb.net/?retryWrites=true&w=majority&appName=exhibitoCluster';
const client = new MongoClient(url);
const db = client.db("exhibito");

const events = [
    {
      "_id": "663de6acbb036aad91e8c5fa",
      "artHouseId": "663de7cebb036aad91e8c5fb",
      "title": "Red Foxes in the Moonlight",
      "description": "Curated by Alex Peerson, Red Foxes in the Moonlight refer to the intersection of different nightly creatures, especially the North Carribean Fox, where the circle of life must find its journey.",
      "location": "Western Cape",
      "startDate": "2024/10/21",
      "endDate": "2024/10/25",
      "startTime": "18:00",
      "endTime": "20:00",
      "ticketPrice": "250",
      "maxSeats": "700",
      "availableSeats": "680",
      "thumbnail": "https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_1280.png",
      "status": "Approved"
    },
    // Add more events below with different details
  ];
  
  // Function to generate random date in October 2024
  function getRandomDate() {
    const start = new Date(2024, 9, 1);
    const end = new Date(2024, 9, 31);
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
  // Function to format date as yyyy/mm/dd
  function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  }
  
  // Populate more events
  for (let i = 1; i < 15; i++) {
    const startDate = getRandomDate();
    const endDate = new Date(startDate.getTime() + 86400000 * 4); // Adds 4 days to start date
    events.push({
        "artHouseId": {
            "$oid": "663de7cebb036aad91e8c5fb"
          },
      "title": `Event Title ${i}`,
      "description": `Description for Event ${i}`,
      "location": ["Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Free State", "North West", "Limpopo", "Mpumalanga", "Northern Cape"][Math.floor(Math.random() * 9)],
      "startDate": formatDate(startDate),
      "endDate": formatDate(endDate),
      "startTime": "10:00",
      "endTime": "18:00",
      "ticketPrice": `${Math.floor(100 + Math.random() * 200)}`,
      "maxSeats": "500",
      "availableSeats": "500",
      "thumbnail": "https://cdn.pixabay.com/photo/2023/10/16/10/51/fox-8318961_1280.png",
      "status": ["Approved", "Pending", "Completed"][Math.floor(Math.random() * 3)]
    });
  }
  
  // Insert events into the MongoDB collection
  db.collection('events').insertMany(events).then(result => {
    console.log(`${result.insertedCount} events were successfully inserted.`);
  }).catch(err => {
    console.error('Failed to insert events:', err);
  });