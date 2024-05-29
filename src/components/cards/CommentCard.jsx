import React, { useState, useEffect } from 'react';
import PrimaryBtn from '../buttons/PrimaryBtn';
import axios from 'axios';

function CommentsCard({ eventId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the backend based on eventId
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/comments?eventId=${eventId}`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    if (eventId) {
      fetchComments();
    }
  }, [eventId]);

  return (
    <div className='w-full flex flex-wrap justify-between'>
      {comments.map((comment) => (
        <div key={comment._id} className="rectangle bg-canvas-white-BASE w-[49%] mt-3">
          <div className="top-section flex items-center justify-between pt-1 px-3 font-body text-ink-silhouette-BASE">
            <div className='font-bold'>{comment.userId}</div>
            <div className="flex items-center space-x-3">
              <div>{comment.createdDate}</div>
              <div className="text-ink-silhouette-40%">{comment.createdTime}</div>
              <div className="mx-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-ink-silhouette-70% hover:fill-scarlet-melody-BASE">
                  <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Z"/>
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
