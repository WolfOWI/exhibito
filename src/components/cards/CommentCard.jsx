import React, { useState, useEffect, useCallback } from "react";
import { getUserById, getCommentsByEventId } from "../../services/getExhibitoData";
import { flagCommentById } from "../../services/updateExhibitoData";

function CommentsCard({ eventId, refreshComments }) {
  const [comments, setComments] = useState([]);
  const [fComments, setFComments] = useState([]); // Filtered comments (Safe only)
  const [users, setUsers] = useState({}); // Users of the comments

  // Fetch user data for comments and cache it to avoid re-fetching the same user
  const fetchUserData = useCallback(
    async (userId) => {
      if (users[userId]) return;

      try {
        const userData = await getUserById(userId);
        setUsers((prevUsers) => ({ ...prevUsers, [userId]: userData }));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    [users]
  );

  // Fetch comments and user data
  const getTheComments = useCallback(async () => {
    try {
      const response = await getCommentsByEventId(eventId);

      // Filtering safe comments
      const safeComments = response.filter((comment) => !comment.isFlagged);
      setFComments(safeComments);

      // Fetch user data for each comment and cache it
      safeComments.forEach((comment) => fetchUserData(comment.userId));

      // Set all comments
      setComments(response);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [eventId, fetchUserData]);

  // Fetch comments whenever the eventId or refreshComments changes
  useEffect(() => {
    if (eventId) {
      getTheComments();
    }
  }, [eventId, refreshComments, getTheComments]);

  // Function to handle flagging a comment
  const handleFlagComment = async (commentId) => {
    try {
      await flagCommentById(commentId);
      getTheComments(); // Refresh the comments after flagging
    } catch (error) {
      console.error("Error flagging the comment:", error);
    }
  };

  return (
    <div className="w-full flex flex-wrap justify-between">
      {fComments.map((comment) => (
        <div key={comment._id} className="rectangle bg-canvas-white-BASE w-[100%] md:w-[49%] mt-3">
          <div className="top-section flex items-center justify-between pt-1 px-3 font-body text-ink-silhouette-BASE">
            <div className="font-bold">{users[comment.userId]?.username || "Deleted User"}</div>
            <div className="flex items-center space-x-3">
              <div>{comment.createdDate}</div>
              <div className="text-ink-silhouette-40%">{comment.createdTime}</div>
              {/* Flag Button Icon */}
              <div className="mx-2 cursor-pointer" onClick={() => handleFlagComment(comment._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  className="fill-ink-silhouette-70% hover:fill-scarlet-melody-BASE"
                >
                  <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="pt-2 px-3 mb-8">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentsCard;
