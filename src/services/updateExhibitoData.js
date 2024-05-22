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
