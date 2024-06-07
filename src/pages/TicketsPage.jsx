import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CartCard from "../components/cards/CartCard";
import "../styles/pendingEventCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { getTicketsByStatus } from "../services/getExhibitoData";
import { jwtDecode } from "jwt-decode";
import { updateTicketStatus } from "../services/updateExhibitoData";
import Container from "react-bootstrap/Container";

function TicketsPage() {
  const [cartTickets, setCartTickets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const fetchCartTickets = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        try {
          const tickets = await getTicketsByStatus(userId, "cart");
          setCartTickets(tickets);
          calculateTotalCost(tickets);
        } catch (error) {
          console.error("Error fetching cart tickets:", error);
        }
      }
    };

    fetchCartTickets();
  }, []);

  const calculateTotalCost = (tickets) => {
    const total = tickets.reduce((sum, ticket) => sum + ticket.ticketPrice, 0);
    setTotalCost(total);
  };

  const handleCheckOut = async () => {
    try {
      const promises = cartTickets.map((ticket) => updateTicketStatus(ticket._id, "booked"));
      await Promise.all(promises);
      alert("Tickets booked successfully!");
      // Optionally, refetch the cart tickets to update the UI
      const token = sessionStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const tickets = await getTicketsByStatus(userId, "cart");
        setCartTickets(tickets);
        calculateTotalCost(tickets);
      }
    } catch (error) {
      console.error("Error during check out:", error);
      alert("Failed to book tickets. Please try again.");
    }
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
            Added To Your Cart
          </h1>

          <p className="font-body">Below are the events that you have added to your cart.</p>
        </div>

        {cartTickets.map((ticket) => (
          <CartCard key={ticket._id} ticket={ticket} />
        ))}

        {/* Check Out Section Mobile View */}
        <div className="flex md:hidden flex-col border-t-2 border-ink-silhouette-40% pt-5">
          <div className="flex justify-between mx-3">
            <h4 className="font-body fw-bold">Total Cost</h4>
            <h2 className="font-body">R{totalCost.toFixed(2)}</h2>
          </div>
          <PrimaryBtn label="Book Events" onClick={handleCheckOut} />
        </div>
        {/* Check Out Section Desktop View */}
        <div className="hidden md:flex justify-between border-t-2 border-ink-silhouette-40% pt-5">
          <h4 className="font-body fw-bold">Total Cost</h4>
          <div className="flex flex-col items-center">
            <h4 className="font-body">R{totalCost.toFixed(2)}</h4>
            <PrimaryBtn label="Book Events" onClick={handleCheckOut} />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default TicketsPage;
