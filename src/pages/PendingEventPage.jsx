// Admin Dashboard Page

// Import
import PendingEventCards from "../components/cards/PendingEventCards";
import { useState, useEffect } from "react";

import { getAllEvents } from "../services/getExhibitoData";

function PendingEventPage() {
  // STATES
  const [pendingEvents, setPendingEvents] = useState([]); // Pending Events

  // On Page Load, get events data from MongoDB and set to state "events"
  useEffect(() => {
    getAllEvents()
      .then((data) => {
        // Filter Pending events
        let filteredEvents = [];
        filteredEvents = data.filter((event) => event.status === "Pending");
        setPendingEvents(filteredEvents);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h3 className="font-body mt-4">Pending Event Submissions</h3>
      <p className="font-body">
        Below are the events awaiting your review. You can decide whether to approve or reject each
        event submission.
      </p>
      {/* Populate List by mapping all in pendingEvents (when it exists) */}
      {pendingEvents
        ? pendingEvents.map((pEvent) => (
            <PendingEventCards
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
            />
          ))
        : ""}
    </div>
  );
}

export default PendingEventPage;
