// DELETE Data from Exhibito Database on MongoDB Atlas
import axios from "axios";

// Get the BASE_URL from environment variables
const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// COMMENTS
// -------------------------------------
// Delete a comment based on id (delete in admin dash)
export function deleteCommentById(commentId) {
  return axios.delete(`${baseUrl}/comments/${commentId}`);
}
// -------------------------------------

// EVENTS
// -------------------------------------
// Delete an event based on id (decline in admin dash)
export function deleteEventById(eventId) {
  return axios.delete(`${baseUrl}/events/${eventId}`);
}
// -------------------------------------

// TICKETS
// -------------------------------------
// Delete a ticket based on id (cart / booking)
export function deleteTicketById(ticketId) {
  return axios.delete(`${baseUrl}/tickets/${ticketId}`);
}
// -------------------------------------
