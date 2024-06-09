import React from "react";
import SecondaryBtn from "../buttons/SecondaryBtn";
import { deleteTicketById } from "../../services/deleteExhibitoData";

function CartCard({ ticket }) {
  const eventDetails = ticket.eventId;

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
      <div className="flex flex-col md:flex-row justify-between items-center my-3 p-3 bg-white shadow rounded-md">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-body text-lg truncate">{eventDetails.title}</h4>
          <p className="font-body text-sm">Location: {eventDetails.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 md:mt-0">
          <div className="hidden md:block text-center">
            <p className="font-body text-sm">Date: {eventDetails.startDate}</p>
            <p className="font-body text-sm">
              Time: {eventDetails.startTime} - {eventDetails.endTime}
            </p>
          </div>
          <p className="font-body text-sm mr-5">R{eventDetails.ticketPrice.toFixed(2)}</p>
          <SecondaryBtn label="Remove" onClick={handleRemove} />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
