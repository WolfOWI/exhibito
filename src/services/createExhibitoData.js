// GET New Data for the Exhibito Database on MongoDB Atlas

// EVENTS
// -------------------------------------
// Create a new event
export function addNewEvent(eventData) {
  return fetch("http://localhost:3001/events/addEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  })
    .then((response) => response.json())
    .then((data) => console.log("Event created:", data))
    .catch((error) => console.error("Error:", error));
}

// -------------------------------------
