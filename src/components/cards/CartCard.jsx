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
    <>
      <div className="flex flex-col sm:text-center md:text-left md:flex-row justify-between items-center my-3 py-3 px-4 bg-canvas-white-40% shadow rounded-3xl">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-display text-2xl truncate ">{event.title}</h4>
          <p className="font-body text-sm">Location: {event.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10 w-full md:w-fit">
          <div className="flex md:flex-col items-center justify-center h-full ">
            <p className="font-body text-sm m-0">Date: {event.startDate}</p>
            <div className="w-8"></div>
            <p className="font-body text-sm m-0">
              Time: {event.startTime} - {event.endTime}
            </p>
          </div>
          <div className="flex items-center justify-center bg-stone-200 p-4 rounded-xl w-full md:w-fit mb-3 md:mb-0">
            <p className="font-body fw-bold text-xl m-0">R{event.ticketPrice.toFixed(2)}</p>
          </div>
          <SecondaryBtn label="Remove" onClick={handleRemove} />
        </div>
      </div>
    </>
  );
}

export default CartCard;
