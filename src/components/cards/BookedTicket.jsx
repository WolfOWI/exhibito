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
    <>
      <div className="flex flex-col sm:text-center md:text-left md:flex-row justify-between items-center my-3 py-2 px-4 bg-canvas-white-10% rounded-3xl">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-display text-2xl truncate ">{eventDetails.title}</h4>
          <p className="font-body text-sm m-0">Location: {eventDetails.location}</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10 w-full md:w-fit">
          <div className="flex md:flex-col items-center justify-center h-full ">
            <p className="font-body text-sm m-0">Date: {eventDetails.startDate}</p>
            <div className="w-8"></div>
            <p className="font-body text-sm m-0">
              Time: {eventDetails.startTime} - {eventDetails.endTime}
            </p>
          </div>
          <div className="flex items-center justify-center bg-stone-200 p-4 rounded-xl w-full md:w-fit ">
            <p className="font-body fw-bold text-xl m-0">R{eventDetails.ticketPrice.toFixed(2)}</p>
          </div>
          <SecondaryBtn label="Cancel" onClick={handleCancel} />
        </div>
      </div>
    </>
  );
}

export default BookedTicket;
