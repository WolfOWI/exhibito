// DELETE Data from Exhibito Database on MongoDB Atlas
import axios from "axios";

// COMMENTS
// -------------------------------------
// Delete a comment based on id (delete in admin dash)
export function deleteCommentById(commentId) {
  return axios.delete(`http://localhost:3001/comments/${commentId}`);
}
// -------------------------------------

// EVENTS
// -------------------------------------
// Delete an event based on id (decline in admin dash)
export function deleteEventById(eventId) {
  return axios.delete(`http://localhost:3001/events/${eventId}`);
}
// -------------------------------------
