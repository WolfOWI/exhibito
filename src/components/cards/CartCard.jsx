import React, { useEffect, useState } from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";
import { getEventById } from "../../services/getExhibitoData";
import { deleteTicketById } from "../../services/deleteExhibitoData";

function CartCard({ ticket }) {
  const [eventDetails, setEventDetails] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const event = await getEventById(ticket.eventId);
        setEventDetails(event);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [ticket.eventId]);

  const handleRemove = async () => {
    try {
      await deleteTicketById(ticket._id);
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error("Error removing ticket from cart:", error);
    }
  };

  if (!eventDetails) {
    return <div>Loading event details...</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center my-3 py-3 px-4 bg-canvas-white-40% shadow rounded-3xl">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-body text-lg truncate">{eventDetails.title}</h4>
          <p className="font-body text-sm">Location: {eventDetails.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="text-center">
            <p className="font-body text-sm">Date: {eventDetails.startDate}</p>
            <p className="font-body text-sm">
              Time: {eventDetails.startTime} - {eventDetails.endTime}
            </p>
          </div>
          <div className="mt-2">
            <p className="font-body">R{eventDetails.ticketPrice.toFixed(2)}</p>
          </div>
          <SecondaryBtn label="Remove" onClick={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
