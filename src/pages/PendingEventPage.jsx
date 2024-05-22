// Admin Dashboard Page

// Import
import PendingEventCards from "../components/cards/PendingEventCards";
import { useState, useEffect } from "react";

import { getAllEvents } from "../services/getExhibitoData";

function PendingEventPage() {
  // STATES
  const [events, setEvents] = useState([]); // Events
  const [pendingEvents, setPendingEvents] = useState([]); // Pending Events

  // On Page Load, get events data from MongoDB and set to state "events"
  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data);
        setPendingEvents(data); // TEMPORARY!
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Filtering by "Pending" status of events
  // const filterPendingEvents = () => {

  //   let filteredEvents = [];

  //   filteredEvents = events.filter((event) => {

  //   })
  // }

  return (
    <div className="container">
      <h3 className="font-body mt-4">Pending Event Submissions</h3>
      <p className="font-body">
        Below are the events awaiting your review. You can decide whether to approve or reject each
        event submission.
      </p>
      {events
        ? events.map((event) => (
            <PendingEventCards
              key={event._id}
              eventIdNum={event._id}
              title={event.title}
              desc={event.description}
              ticketPrice={event.ticketPrice}
              maxSeats={event.maxSeats}
              startTime={event.startTime}
              endTime={event.endTime}
              startDate={event.startDate}
              endDate={event.endDate}
              location={event.location}
              artHouseId={event.artHouseId}
            />
          ))
        : ""}
    </div>
  );
}

export default PendingEventPage;
