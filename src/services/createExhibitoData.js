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

// COMMENTS
// -------------------------------------
// Create a new comment
export function addNewComment(commentData) {
  return fetch("http://localhost:3001/comments/addComment", {
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
  return fetch("http://localhost:3001/tickets/addTicket", {
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
