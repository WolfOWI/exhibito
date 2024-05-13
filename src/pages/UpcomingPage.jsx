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

  // On Page Load, get events data from MongoDB and set to state "events"
  useEffect(() => {
    getAllEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <SortDropdown />
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
