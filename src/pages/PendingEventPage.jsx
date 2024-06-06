// Pending Events Page (Admin Dashboard Tab)

// Import
import PendingEventCard from "../components/cards/PendingEventCard";
import { useState, useEffect } from "react";
import { getAllEvents } from "../services/getExhibitoData";
import { approveEventById } from "../services/updateExhibitoData";
import { deleteEventById } from "../services/deleteExhibitoData";

function PendingEventPage() {
  // STATES
  const [pendingEvents, setPendingEvents] = useState([]); // Pending Events

  // On Page Load
  useEffect(() => {
    fetchPendingEvents();
  }, []);

  // Get events data from MongoDB, filter pending events, and set to pendingEvents state
  const fetchPendingEvents = () => {
    getAllEvents()
      .then((data) => {
        // Filter Pending events
        const filteredEvents = data.filter((event) => event.status === "Pending");
        setPendingEvents(filteredEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Approving events (Approve Button)
  const handleApprove = (eventId) => {
    approveEventById(eventId)
      .then(() => {
        // Refresh the list of pending events after approval
        fetchPendingEvents();
        console.log("Approving event: " + eventId);
      })
      .catch((error) => {
        console.error("Error approving event:", error);
      });
  };

  const handleDelete = async (eventId) => {
    try {
      await deleteEventById(eventId);
      setPendingEvents((prevEvents) => prevEvents.filter((event) => event._id !== eventId));
      console.log("Event: " + eventId + " deleted.");
      fetchPendingEvents(); // Refresh pending events
    } catch (err) {
      console.log("Error deleting event:", err);
    }
  };

  return (
    <div className="container">
      <h3 className="font-body mt-4 text-sapphire-whisper-BASE">Pending Event Submissions</h3>
      <p className="font-body">
        Below are the events awaiting your review. You can decide whether to approve or reject each
        event submission.
      </p>
      {/* Populate List by mapping all in pendingEvents */}
      {pendingEvents.length > 0 ? (
        pendingEvents.map((pEvent) => (
          <PendingEventCard
            key={pEvent._id}
            eventIdNum={pEvent._id}
            title={pEvent.title}
            desc={pEvent.description}
            ticketPrice={pEvent.ticketPrice}
            maxSeats={pEvent.maxSeats}
            startTime={pEvent.startTime}
            endTime={pEvent.endTime}
            startDate={pEvent.startDate}
            endDate={pEvent.endDate}
            location={pEvent.location}
            artHouseId={pEvent.artHouseId}
            onApprove={() => handleApprove(pEvent._id)} // Approve Button
            onDelete={() => handleDelete(pEvent._id)}
          />
        ))
      ) : (
        <div className="w-full flex justify-center mt-32">
          <h4 className="font-body">There are no pending events.</h4>
        </div>
      )}
    </div>
  );
}

export default PendingEventPage;
