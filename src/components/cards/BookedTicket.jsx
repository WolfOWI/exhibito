// Admin Dashboard Page

// Import css
import SecondaryBtn from "../buttons/SecondaryBtn";
import { deleteTicketById } from "../../services/deleteExhibitoData";

function BookedTicket({ ticket, eventDetails, onCancel }) {
  if (!eventDetails) {
    return <div>Loading...</div>;
  }

  // Handling the cancellation of the booking.
  const handleCancel = async () => {
    try {
      await deleteTicketById(ticket._id);
      onCancel(ticket._id);
    } catch (error) {
      console.error("Error canceling ticket:", error);
    }
  };

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
          <SecondaryBtn label="Cancel" onClick={handleCancel} />
        </div>
      </div>
    </div>
  );
}

export default BookedTicket;
