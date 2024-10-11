// UPDATE Data from Exhibito Database on MongoDB Atlas

// EVENTS
// -------------------------------------
// Approve an event (Update status to "Approved")
export function approveEventById(eventId) {
  return fetch(`/events/${eventId}/approve`, {
    method: "PUT",
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}
// -------------------------------------

// COMMENTS
// -------------------------------------
// Unflag a comment (Update isFlagged to false)
export function unflagCommentById(commentId) {
  return fetch(`/comments/${commentId}/unflag`, {
    method: "PUT",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      // Check if response has content to parse as JSON
      return response.text().then((text) => {
        return text ? JSON.parse(text) : {};
      });
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error unflagging comment:", error));
}

// Flag a comment (Update isFlagged to true)
export function flagCommentById(commentId) {
  return fetch(`/comments/${commentId}/flag`, {
    method: "PUT",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      // Check if response has content to parse as JSON
      return response.text().then((text) => {
        return text ? JSON.parse(text) : {};
      });
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error flagging comment:", error));
}

// -------------------------------------

// TICKETS
// -------------------------------------
// Update the status of a ticket by ID
export function updateTicketStatus(ticketId, status) {
  return fetch(`/tickets/${ticketId}/updateStatus/${status}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }
      // Check if response has content to parse as JSON
      return response.text().then((text) => {
        return text ? JSON.parse(text) : {};
      });
    })
    .then((data) => console.log(data))
    .catch((error) => console.error("Error updating ticket status:", error));
}
// -------------------------------------
