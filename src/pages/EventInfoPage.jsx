// Event Info Page (Specific)

// Import
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Functions
import { getEventById, getHouseById, getUserById } from "../services/getExhibitoData";
import { addNewComment, addNewTicket } from "../services/createExhibitoData";
import { getCurrentDate, getCurrentTime } from "../services/datesFunctions";
import useScrollToTop from "../services/useScrollToTop";

// Components
import NavigationBar from "../components/NavigationBar";
import CommentsCard from "../components/cards/CommentCard";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import Footer from "../components/Footer";
import NewComment from "../components/cards/NewComment";
import Modal from "react-bootstrap/Modal";

// CSS & Styling
import "../styles/EventInfo.css";
import "../styles/commentCard.css";

function EventInfoPage() {
  const { eventId } = useParams();
  const navigate = useNavigate(); // Navigate

  const [specificEvent, setSpecificEvent] = useState("");
  const [artHouse, setArtHouse] = useState(null);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [refreshComments, setRefreshComments] = useState(false);
  const [isHouse, setIsHouse] = useState(false);

  const [newComment, setNewComment] = useState({
    eventId: eventId,
    userId: "",
    text: "",
    isFlagged: false,
    createdDate: "",
    createdTime: "",
  });

  // Scroll to top when page loads
  useScrollToTop();

  // When eventId changes
  useEffect(() => {
    // Get the event by its ID
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
          if (userData.userType === "house") {
            setIsHouse(true);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [eventId]);

  // Creating a new comment
  function createComment() {
    // If logged in user exists
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

      // Reset the comment after successful submission
      setNewComment({
        ...newComment,
        text: "",
      });
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

  // Navigate to Events Page
  const handleToCart = () => {
    navigate("/tickets");
  };

  return (
    <div>
      <NavigationBar />
      {/* Event Info */}
      <div className="container mt-5">
        <div className="event-image">
          <img src={specificEvent.thumbnail} alt="imagery of event" className="event-img"></img>
        </div>
        <h1 className="font-display mt-5">{specificEvent.title}</h1>
        <h3 className="font-body text-sapphire-whisper-BASE mt-1">
          R{specificEvent.ticketPrice} per person
        </h3>

        <p className="font-body">{specificEvent.description}</p>
        <ul className="font-body mt-1">
          <li>
            <span className="fw-bold">Exhibition by:</span>{" "}
            {artHouse ? artHouse.name : specificEvent.artHouseId}
          </li>
          <li>
            <span className="fw-bold">Location:</span> {specificEvent.location}
          </li>
          <li>
            <span className="fw-bold">Dates: </span>
            {specificEvent.startDate} - {specificEvent.endDate}
          </li>
          <li>
            <span className="fw-bold">Times: </span>
            {specificEvent.startTime} - {specificEvent.endTime}
          </li>
        </ul>
        {isHouse ? "" : <PrimaryBtn label="Add to Cart" onClick={handleAddtoCart} />}
      </div>

      {/* Reviews */}
      <div className="container">
        <h2 className="font-display mt-8">Reviews</h2>
        <div className="row">
          <div>
            <CommentsCard eventId={eventId} refreshComments={refreshComments} />
          </div>
        </div>
      </div>

      {/* New Review */}
      <div className="container mt-8">
        <h2 className="font-display">Leave a Review</h2>
        <NewComment
          onPostClick={createComment}
          newComment={newComment}
          setNewComment={setNewComment}
        />
      </div>

      <Footer />

      {/* Add to Cart Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="font-display">Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-body">
          You have successfully added this event to your cart. <br />
          Please visit your cart to book the event.
        </Modal.Body>
        <Modal.Footer>
          <SecondaryBtn label="View Cart" onClick={handleToCart} />
          <PrimaryBtn label="Done" onClick={() => setShowModal(false)} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EventInfoPage;
