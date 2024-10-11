import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CartCard from "../components/cards/CartCard";
import "../styles/pendingEventCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { getTicketsByStatus, getEventById } from "../services/getExhibitoData";
import { jwtDecode } from "jwt-decode";
import { updateTicketStatus } from "../services/updateExhibitoData";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import { useNavigate } from "react-router-dom";

function TicketsPage() {
  const [cartTickets, setCartTickets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [cartedEvents, setCartedEvents] = useState([]); // The events in the cart
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Navigate

  useEffect(() => {
    const fetchCartTickets = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        try {
          const tickets = await getTicketsByStatus(userId, "cart");
          setCartTickets(tickets);

          const eventPromises = tickets.map((ticket) => getEventById(ticket.eventId));

          const events = await Promise.all(eventPromises);
          setCartedEvents(events);

          console.log(events);
          // Calculate the total cost
          const cost = events.reduce((acc, event) => {
            // Check if eventId and ticketPrice exist
            return acc + event.ticketPrice;
          }, 0);
          setTotalCost(cost);
        } catch (error) {
          console.error("Error fetching cart tickets:", error);
        }
      }
    };

    fetchCartTickets();
  }, []);

  // TODO Delete Later
  useEffect(() => {
    console.log("cartTickets");
    console.log(cartTickets);
  }, [cartTickets]);
  useEffect(() => {
    console.log("cartedEvents");
    console.log(cartedEvents);
  }, [cartedEvents]);

  const handleCheckOut = async () => {
    try {
      const promises = cartTickets.map((ticket) => updateTicketStatus(ticket._id, "booked"));
      await Promise.all(promises);
      setShowModal(true);
      // Optionally, refetch the cart tickets to update the UI
      const token = sessionStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const tickets = await getTicketsByStatus(userId, "cart");
        setCartTickets(tickets);
      }
    } catch (error) {
      console.error("Error during check out:", error);
      alert("Failed to book tickets. Please try again.");
    }
  };

  // Navigate to Events Page
  const handleToUpcomingEvents = () => {
    navigate("/upcoming");
  };

  // Navigate to Profile
  const handleToProfile = () => {
    navigate("/profile");
  };

  return (
    <div style={{ backgroundColor: "#f3f1ee" }}>
      <NavigationBar />
      <Container className="mt-6">
        <div className="flex flex-col">
          <h1
            style={{
              color: "black",
              fontFamily: "DM Serif Display",
              fontSize: "39px",
              float: "left",
            }}
          >
            Tickets in Cart
          </h1>
          {cartTickets.length > 0 ? (
            <p className="font-body">
              Below are the unbooked events that you have added to your cart.
            </p>
          ) : (
            ""
          )}
        </div>

        {cartTickets.length > 0 ? (
          cartTickets.map((ticket, index) => (
            <CartCard key={ticket._id} ticket={ticket} event={cartedEvents[index]} />
          ))
        ) : (
          <div className="w-full flex justify-center my-5">
            <div className="flex flex-col items-center">
              <h3 className="font-body fw-bold">Cart is Empty</h3>
              <p className="font-body">
                Please add items to your cart by visiting the upcoming events pages.
              </p>
              <SecondaryBtn label="Upcoming Events" onClick={handleToUpcomingEvents} />
            </div>
          </div>
        )}

        {/* Total Section */}
        {cartTickets.length > 0 ? (
          <div>
            <div className="flex md:hidden flex-col border-t-2 border-ink-silhouette-40% pt-5">
              <div className="flex justify-between mx-3">
                <h4 className="font-display">Total Cost</h4>
                <h2 className="font-body">R{totalCost.toFixed(2)}</h2>
              </div>
              <PrimaryBtn label="Book Events" onClick={handleCheckOut} />
            </div>
            <div className="hidden md:flex justify-between border-t-2 border-ink-silhouette-40% pt-5">
              <h4 className="font-display">Total Cost</h4>
              <div className="flex flex-col items-center">
                <h4 className="font-body">R{totalCost.toFixed(2)}</h4>
                <PrimaryBtn label="Book Events" onClick={handleCheckOut} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
      <Footer />
      {/* Success Modal Confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="font-display">Event(s) Booked</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-body">
          You have successfully booked the event(s) in your cart. <br />
          If you'd like to see your booked events, visit your profile.
        </Modal.Body>
        <Modal.Footer>
          <SecondaryBtn label="View Profile" onClick={handleToProfile} />
          <PrimaryBtn label="Done" onClick={() => setShowModal(false)} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TicketsPage;
