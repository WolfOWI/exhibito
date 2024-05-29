// Event Info Page (Specific)

// Import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEventById } from "../services/getExhibitoData";
import NavigationBar from "../components/NavigationBar";
import CommentsCard from "../components/cards/CommentCard";
// import EventImage from "../assets/images/homepage.png";
import "../styles/EventInfo.css";
import "../styles/commentCard.css"
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Footer from "../components/Footer";

function EventInfoPage() {
  const { eventId } = useParams();
  const [specificEvent, setSpecificEvent] = useState("");

  useEffect(() => {
    getEventById(eventId)
      .then((data) => {
        setSpecificEvent(data);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, [eventId]);

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
          <li>Arthouse: REQUIRES TO BE LINKED WITH ARTHOUSE ID: {specificEvent.artHouseId}</li>
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
        <h2 className="font-display mt-4">Reviews</h2>
        <div className="row mt-2">
          <div className="col-6">
            <CommentsCard />
          </div>
          <div className="col-6">
            <CommentsCard />
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <h2 className="font-display">Leave a Review</h2>
        <div className="row flex items-end">
          <div className="col-10">
            <label className="comment-input font-body">
              Leave a Comment:
              <textarea name="description" className="h-20" required />
            </label>
          </div>
          <div className="col-2">
            <PrimaryBtn label="Post Review" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EventInfoPage;
