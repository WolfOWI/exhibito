// Flagged Comments Page (Admin Dashboard Tab)

// Import
import FlaggedCommentCard from "../components/cards/FlaggedCommentsCard";
import { useState, useEffect } from "react";
import { getAllComments, getUserById, getEventById } from "../services/getExhibitoData";
import { unflagCommentById } from "../services/updateExhibitoData";
import { deleteCommentById } from "../services/deleteExhibitoData";

function FlaggedCommentPage() {
  // STATES
  const [flaggedComments, setFlaggedComments] = useState([]); // Flagged Comments
  const [users, setUsers] = useState({}); // Users data
  const [events, setEvents] = useState({}); // Events data

  // On Page Load
  useEffect(() => {
    fetchFlaggedComments();
  }, []);

  // Get all comments data from MongoDB, filter by flagged status, and store in flaggedComments state
  const fetchFlaggedComments = async () => {
    try {
      const commentsData = await getAllComments();
      const fComments = commentsData.filter((comment) => comment.isFlagged === true);

      // Fetch user and event data for each flagged comment
      const userPromises = fComments.map((comment) =>
        getUserById(comment.userId).catch((err) => {
          console.error(`Failed to fetch user details for ID: ${comment.userId}. Error: ${err}`);
          return { _id: comment.userId, username: "Unknown User" }; // Fallback user data
        })
      );

      const eventPromises = fComments.map((comment) =>
        getEventById(comment.eventId).catch((err) => {
          console.error(`Failed to fetch event details for ID: ${comment.eventId}. Error: ${err}`);
          return { _id: comment.eventId, title: "Unknown Event" }; // Fallback event data
        })
      );

      const usersData = await Promise.all(userPromises);
      const eventsData = await Promise.all(eventPromises);

      // Map user and event data to their respective IDs
      const usersMap = usersData.reduce((acc, user) => ({ ...acc, [user._id]: user }), {});
      const eventsMap = eventsData.reduce((acc, event) => ({ ...acc, [event._id]: event }), {});

      setFlaggedComments(fComments);
      setUsers(usersMap);
      setEvents(eventsMap);
    } catch (error) {
      console.error("Error fetching flagged comments:", error);
    }
  };

  const handleUnflag = async (commentId) => {
    try {
      await unflagCommentById(commentId);
      fetchFlaggedComments(); // Refresh List
      console.log("Comment: " + commentId + " marked as safe.");
    } catch (error) {
      console.error("Error unflagging comment:", error);
    }
  };

  const handleDelete = async (commentId) => {
    try {
      await deleteCommentById(commentId);
      setFlaggedComments((prevComments) =>
        prevComments.filter((comment) => comment._id !== commentId)
      );
      console.log("Comment: " + commentId + " deleted.");
      fetchFlaggedComments(); // Refresh the list
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="font-body mt-4 text-sapphire-whisper-BASE">Flagged Comments</h3>
      <p className="font-body">
        Below are the comments that have been flagged by users. Review each comment and take
        appropriate action as needed.
      </p>
      {/* Populate list by mapping each flagged comment to the flagged comment card */}
      {flaggedComments.length > 0 ? (
        flaggedComments.map((fCom) => (
          <FlaggedCommentCard
            key={fCom._id}
            text={fCom.text}
            createdDate={fCom.createdDate}
            createdTime={fCom.createdTime}
            username={users[fCom.userId]?.username || "Unknown User"}
            eventName={events[fCom.eventId]?.title || "Unknown Event"}
            onUnflag={() => handleUnflag(fCom._id)} // Safe button
            onDelete={() => handleDelete(fCom._id)} // Delete button
          />
        ))
      ) : (
        <div className="w-full flex justify-center mt-32">
          <h4 className="font-body">There are no flagged comments.</h4>
        </div>
      )}
    </div>
  );
}

export default FlaggedCommentPage;
