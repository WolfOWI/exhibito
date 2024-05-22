// Flagged Comments Page (Admin Dashboard Tab)

// Import
import FlaggedCommentCard from "../components/cards/FlaggedCommentsCard";
import { useState, useEffect } from "react";
import { getAllComments } from "../services/getExhibitoData";
import { unflagCommentById } from "../services/updateExhibitoData";

function FlaggedCommentPage() {
  // STATES
  const [flaggedComments, setFlaggedComments] = useState([]); // Flagged Comments

  // On Page Load
  useEffect(() => {
    fetchFlaggedComments();
  }, []);

  // Get all comments data from MongoDB, filter by flagged status, and store in flaggedComments state
  const fetchFlaggedComments = () => {
    getAllComments()
      .then((data) => {
        // Filter Pending events
        let fComments = [];
        fComments = data.filter((comment) => comment.isFlagged === true);
        setFlaggedComments(fComments);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUnflag = (commentId) => {
    unflagCommentById(commentId)
      .then(() => {
        fetchFlaggedComments(); // Refresh List
        console.log("Comment: " + commentId + " marked as safe.");
      })
      .catch((error) => {
        console.error("Error unflagging comment:", error);
      });
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
            onUnflag={() => handleUnflag(fCom._id)} // Safe button
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
