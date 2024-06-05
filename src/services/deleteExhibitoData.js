// DELETE Data from Exhibito Database on MongoDB Atlas
import axios from "axios";

// COMMENTS
// -------------------------------------
export function deleteCommentById(commentId) {
  return axios.delete(`http://localhost:3001/comments/${commentId}`);
}
// -------------------------------------
