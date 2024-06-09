import React from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";
import { deleteTicketById } from "../../services/deleteExhibitoData";

function CartCard({ ticket, event }) {
  // const eventDetails = ticket.eventId;

  const handleRemove = async () => {
    try {
      await deleteTicketById(ticket._id);
      window.location.reload(); // Reload the page to reflect changes
    } catch (error) {
      console.error("Error removing ticket from cart:", error);
    }
  };

  if (!event) {
    return <div>Loading event details...</div>;
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center my-3 py-3 px-4 bg-canvas-white-40% shadow rounded-3xl">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-body text-lg truncate">{event.title}</h4>
          <p className="font-body text-sm">Location: {event.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="text-center">
            <p className="font-body text-sm">Date: {event.startDate}</p>
            <p className="font-body text-sm">
              Time: {event.startTime} - {event.endTime}
            </p>
          </div>
          <div className="mt-2">
            <p className="font-body">R{event.ticketPrice.toFixed(2)}</p>
          </div>
          <SecondaryBtn label="Remove" onClick={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
