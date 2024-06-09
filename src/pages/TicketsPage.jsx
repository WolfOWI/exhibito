import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CartCard from "../components/cards/CartCard";
import "../styles/pendingEventCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import { getTicketsByStatus } from "../services/getExhibitoData";
import { jwtDecode } from "jwt-decode";
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

          // Calculate the total cost
          const cost = tickets.reduce((acc, ticket) => {
            // Check if eventId and ticketPrice exist
            if (ticket.eventId && ticket.eventId.ticketPrice) {
              return acc + ticket.eventId.ticketPrice;
            }
            return acc;
          }, 0);
          setTotalCost(cost);
        } catch (error) {
          console.error("Error fetching cart tickets:", error);
        }
      }
    };

    fetchCartTickets();
  }, []);

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
          <p className="font-body">
            Below are the events that you have added to your cart.
          </p>
        </div>
        {cartTickets.map((ticket) => (
          // Ensure event data is present before rendering CartCard
          ticket.eventId ? <CartCard key={ticket._id} ticket={ticket} /> : null
        ))}
        {/* Check Out Section Mobile View */}
        <div className="flex md:hidden flex-col border-t-2 border-ink-silhouette-40% pt-5">
          <div className="flex justify-between mx-3">
            <h4 className="font-body fw-bold">Total Cost</h4>
            <h2 className="font-body">R{totalCost.toFixed(2)}</h2>
          </div>
          <PrimaryBtn label="Check Out" />
        </div>
        {/* Check Out Section Desktop View */}
        <div className="hidden md:flex justify-between border-t-2 border-ink-silhouette-40% pt-5">
          <h4 className="font-body fw-bold">Total Cost</h4>
          <div className="flex flex-col items-center">
            <h4 className="font-body">R{totalCost.toFixed(2)}</h4>
            <PrimaryBtn label="Check Out" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default TicketsPage;
