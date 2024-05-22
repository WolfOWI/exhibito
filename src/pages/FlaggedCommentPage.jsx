// Flagged Comments Page (Admin Dashboard Tab)

// Import
import FlaggedCommentCard from "../components/cards/FlaggedCommentsCard";
import { useState, useEffect } from "react";
import { getAllComments } from "../services/getExhibitoData";

function FlaggedCommentPage() {
  // STATES
  const [flaggedComments, setFlaggedComments] = useState([]); // Flagged Comments

  // On Page Load, get all comments data from MongoDB, filter by flagged status, and store in flaggedComments state
  useEffect(() => {
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
  }, []);

  return (
    <div className="container">
      <h3 className="font-body mt-4">Flagged Comments</h3>
      <p className="font-body">
        Below are the comments that have been flagged by users. Review each comment and take
        appropriate action as needed.
      </p>
      {/* Populate list by mapping each flagged comment to the flagged comment card */}
      {flaggedComments
        ? flaggedComments.map((fCom) => (
            <FlaggedCommentCard
              key={fCom._id}
              text={fCom.text}
              createdDate={fCom.createdDate}
              createdTime={fCom.createdTime}
            />
          ))
        : ""}
    </div>
  );
}

export default FlaggedCommentPage;
