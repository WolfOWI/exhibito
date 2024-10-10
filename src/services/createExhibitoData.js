// GET New Data for the Exhibito Database on MongoDB Atlas

// Get the BASE_URL from environment variables
const baseUrl = process.env.BASE_URL || "http://localhost:3001";

// EVENTS
// -------------------------------------
// Create a new event
export function addNewEvent(eventData) {
  return fetch(`${baseUrl}/events/addEvent`, {
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

// COMMENTS
// -------------------------------------
// Create a new comment
export function addNewComment(commentData) {
  return fetch(`${baseUrl}/comments/addComment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commentData),
  })
    .then((response) => response.json())
    .then((data) => console.log("Comment created:", data))
    .catch((error) => console.error("Error:", error));
}
// -------------------------------------

// TICKETS
// -------------------------------------
// Create a new ticket
export function addNewTicket(ticketData) {
  return fetch(`${baseUrl}/tickets/addTicket`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Ticket created:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error creating ticket:", error);
      throw error;
    });
}
// -------------------------------------
