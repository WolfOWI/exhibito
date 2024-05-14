// Upcoming Exhibitions Page

import { useState, useEffect } from "react";

// Import Custom Components
import NavigationBar from "../components/NavigationBar";
import SortDropdown from "../components/dropdowns/SortDropdown";
import EventCard from "../components/cards/EventCard";
import FilterCard from "../components/cards/FilterCard";
import Footer from "../components/Footer";

// Import Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import Functions
import { getAllEvents } from "../services/getExhibitoData";

function UpcomingPage() {
  // Exhibition Events Stored in State
  const [events, setEvents] = useState([]);

  // Default Order of all events
  const [defaultAllEvents, setDefaultAllEvents] = useState([]);

  // On Page Load, get events data from MongoDB and set to state "events"
  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data);
        setDefaultAllEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Function for sorting events (based on sort dropdown)
  const handleSortChange = (sortType) => {
    let sortedEvents = [...events];
    switch (sortType) {
      case "priceAsc":
        sortedEvents.sort((a, b) => Number(a.ticketPrice) - Number(b.ticketPrice));
        break;
      case "priceDesc":
        sortedEvents.sort((a, b) => Number(b.ticketPrice) - Number(a.ticketPrice));
        break;
      case "dateAsc":
        sortedEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case "dateDesc":
        sortedEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
      case "seatsAsc":
        sortedEvents.sort((a, b) => a.availableSeats - b.availableSeats);
        break;
      case "seatsDesc":
        sortedEvents.sort((a, b) => b.availableSeats - a.availableSeats);
        break;
      case "clear":
        sortedEvents = [...defaultAllEvents];
        break;
      default:
        sortedEvents = [...events];
    }
    setEvents(sortedEvents);
  };

  return (
    <div>
      <NavigationBar />
      <Container className="mt-6">
        {/* Heading Section */}
        <Row className="mb-3">
          <Col xs={9}>
            <h1 className="font-display text-ink-silhouette-BASE">Upcoming Exhibitions</h1>
          </Col>
          <Col xs={3} className="flex justify-end pr-8">
            <SortDropdown onSortSelected={handleSortChange} />
          </Col>
        </Row>
        {/* Content Section */}
        <Row>
          {/* Filter Card */}
          <Col xs={12} md={6} lg={3} className="mt-3">
            <FilterCard />
          </Col>
          {/* Event Exhibition Cards */}
          <Col xs={12} md={6} lg={9}>
            <Row>
              {/* Generate (map) All events from MongoDB to an EventCard in a column (for styling) */}
              {events.map((event) => (
                <Col xs={12} lg={6} xl={4}>
                  <EventCard
                    key={event._id}
                    thumbnail={event.thumbnail}
                    title={event.title}
                    desc={event.description}
                    ticketPrice={event.ticketPrice}
                    avSeats={event.availableSeats}
                    maxSeats={event.maxSeats}
                    startTime={event.startTime}
                    endTime={event.endTime}
                    startDate={event.startDate}
                    endDate={event.endDate}
                    location={event.location}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UpcomingPage;
