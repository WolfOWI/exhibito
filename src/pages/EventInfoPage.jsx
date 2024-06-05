// Event Info Page (Specific)

// Import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEventById, getHouseById } from "../services/getExhibitoData";
import { addNewComment } from "../services/createExhibitoData";
import NavigationBar from "../components/NavigationBar";
import CommentsCard from "../components/cards/CommentCard";
import "../styles/EventInfo.css";
import "../styles/commentCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Footer from "../components/Footer";
import NewComment from "../components/cards/NewComment";
import useScrollToTop from "../services/useScrollToTop";

function EventInfoPage() {
  const { eventId } = useParams();
  const [specificEvent, setSpecificEvent] = useState("");
  const [artHouse, setArtHouse] = useState(null);

  const [refreshComments, setRefreshComments] = useState(false);

  const [newComment, setNewComment] = useState({
    eventId: eventId,
    userId: "", // !!!!!!!!!!!!!!!!!!!!!!!!
    text: "",
    isFlagged: false,
    createdDate: "", // !!!!!!!!!!!!!!!!!!!!!!!!
    createdTime: "", // !!!!!!!!!!!!!!!!!!!!!!!!
  });

  useScrollToTop();

  useEffect(() => {
    getEventById(eventId)
      .then((data) => {
        setSpecificEvent(data);
        return getHouseById(data.artHouseId);
      })
      .then((houseData) => {
        setArtHouse(houseData);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, [eventId]);

  function createComment() {
    const commentData = {
      eventId: eventId,
      userId: "664899a26073906275ba104a", // !!!!!!!!!!!!!!!!!!!!!!!!
      text: newComment.text,
      isFlagged: false,
      createdDate: "hello", // !!!!!!!!!!!!!!!!!!!!!!!!
      createdTime: "hello", // !!!!!!!!!!!!!!!!!!!!!!!!
    };

    addNewComment(commentData).then(() => {
      setRefreshComments((prev) => !prev); // Toggle between false & true
    });
  }

  return (
    <div>
      <NavigationBar />
      <div className="container mt-5">
        <div className="event-image">
          <img src={specificEvent.thumbnail} alt="imagery of event" className="event-img"></img>
        </div>
        <h1 className="font-display mt-5">{specificEvent.title}</h1>
        <h3 className="font-body text-scarlet-melody-BASE mt-1">
          R{specificEvent.ticketPrice} per person
        </h3>

        <p className="font-body">{specificEvent.description}</p>
        <ul className="font-body mt-1">
          <li>Arthouse: {artHouse ? artHouse.name : specificEvent.artHouseId}</li>
          <li>Location: {specificEvent.location}</li>
          <li>
            Exhibition Date: {specificEvent.startDate} - {specificEvent.endDate}
          </li>
          <li>
            Exhibition Times: {specificEvent.startTime} - {specificEvent.endTime}
          </li>
        </ul>
        <PrimaryBtn label="Book Now" />
      </div>

      <div className="container">
        <h2 className="font-display mt-4">Previous Comments</h2>
        <div className="row mt-2">
          <div>
            <CommentsCard eventId={eventId} refreshComments={refreshComments} />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <h2 className="font-display">Leave a Review</h2>
        <NewComment
          onPostClick={createComment}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      </div>

      <Footer />
    </div>
  );
}

export default EventInfoPage;
