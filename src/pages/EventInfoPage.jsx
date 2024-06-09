// Event Info Page (Specific)

// Import
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getEventById, getHouseById, getUserById } from "../services/getExhibitoData";
import { addNewComment, addNewTicket } from "../services/createExhibitoData";
import NavigationBar from "../components/NavigationBar";
import CommentsCard from "../components/cards/CommentCard";
import "../styles/EventInfo.css";
import "../styles/commentCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Footer from "../components/Footer";
import NewComment from "../components/cards/NewComment";
import useScrollToTop from "../services/useScrollToTop";
import { getCurrentDate, getCurrentTime } from "../services/datesFunctions";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EventInfoPage() {
  const { eventId } = useParams();

  const [specificEvent, setSpecificEvent] = useState("");
  const [artHouse, setArtHouse] = useState(null);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [refreshComments, setRefreshComments] = useState(false);

  const [newComment, setNewComment] = useState({
    eventId: eventId,
    userId: "",
    text: "",
    isFlagged: false,
    createdDate: "",
    createdTime: "",
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

    // Fetch the current user data
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      getUserById(decodedToken.userId)
        .then((userData) => {
          setUser(userData);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [eventId]);

  // Creating a new comment
  function createComment() {
    if (!user) return;

    const commentData = {
      eventId: eventId,
      userId: user._id,
      username: user.username,
      text: newComment.text,
      isFlagged: false,
      createdDate: getCurrentDate(),
      createdTime: getCurrentTime(),
    };

    addNewComment(commentData).then(() => {
      setRefreshComments((prev) => !prev); // Toggle between false & true
    });
  }

  // Add the event to cart
  function handleAddtoCart() {
    if (!user) return;

    const ticketData = {
      eventId: eventId,
      userId: user._id,
      status: "cart",
    };

    addNewTicket(ticketData)
      .then(() => {
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error creating ticket:", error);
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
        <PrimaryBtn label="Add to Cart" onClick={handleAddtoCart} />
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="font-display">Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-body">
          You have successfully added this event to your cart. <br />
          Please visit your cart to book the event.
        </Modal.Body>
        <Modal.Footer>
          <PrimaryBtn label="Done" onClick={() => setShowModal(false)} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EventInfoPage;
