// Upcoming Exhibitions Page

// Imports
import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import SortDropdown from "../components/dropdowns/SortDropdown";
import EventCard from "../components/cards/EventCard";
import FilterCard from "../components/cards/FilterCard";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getAllEvents } from "../services/getExhibitoData";

function UpcomingPage() {
  // STATES
  const [events, setEvents] = useState([]); // Events
  const [defaultAllEvents, setDefaultAllEvents] = useState([]); // Default Order of all events
  const [minPrice, setMinPrice] = useState(""); // Minimum Price (Filtering)
  const [maxPrice, setMaxPrice] = useState(""); // Maximum Price (Filtering)
  const [startDate, setStartDate] = useState(""); // Start Date (Filtering)
  const [endDate, setEndDate] = useState(""); // End Date (Filtering)
  const [location, setLocation] = useState(""); // Location (Filtering)
  const [lastSortType, setLastSortType] = useState("clear"); // Tracking last sorting type (sort dropdown)

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

  // Filtering & Sorting
  const applyFiltersAndSort = (newSortType) => {
    // FILTERING
    let filteredEvents = defaultAllEvents.filter((event) => {
      return (
        (minPrice ? parseFloat(event.ticketPrice) >= parseFloat(minPrice) : true) &&
        (maxPrice ? parseFloat(event.ticketPrice) <= parseFloat(maxPrice) : true) &&
        (startDate ? new Date(event.startDate) >= new Date(startDate) : true) &&
        (endDate ? new Date(event.endDate) <= new Date(endDate) : true) &&
        (location ? event.location === location : true)
      );
    });
    console.log(filteredEvents);

    // SORTING
    // console.log(typeof newSortType);

    let sortType = "clear";

    if (newSortType && typeof newSortType !== "object") {
      sortType = newSortType;
      console.log("Set sortType to the new " + newSortType);
      setLastSortType(newSortType);
      console.log("Set Last Sort type to " + newSortType);
    } else {
      sortType = lastSortType;
      console.log("Set sortType to " + lastSortType);
    }

    console.log("Sorting by: " + sortType);
    switch (sortType) {
      case "priceAsc":
        filteredEvents.sort((a, b) => parseFloat(a.ticketPrice) - parseFloat(b.ticketPrice));
        break;
      case "priceDesc":
        filteredEvents.sort((a, b) => parseFloat(b.ticketPrice) - parseFloat(a.ticketPrice));
        break;
      case "dateAsc":
        filteredEvents.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
        break;
      case "dateDesc":
        filteredEvents.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        break;
      case "seatsAsc":
        filteredEvents.sort((a, b) => a.availableSeats - b.availableSeats);
        break;
      case "seatsDesc":
        filteredEvents.sort((a, b) => b.availableSeats - a.availableSeats);
        break;
      case "clear":
        break;
      default:
        break;
    }

    setEvents(filteredEvents);
  };

  const clearFilters = () => {
    setMinPrice("");
    setMaxPrice("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    applyFiltersAndSort();
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
            <SortDropdown onSortSelected={applyFiltersAndSort} />
          </Col>
        </Row>
        {/* Content Section */}
        <Row>
          {/* Filter Card */}
          <Col xs={12} md={6} lg={3} className="mt-3">
            <FilterCard
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
              location={location}
              setLocation={setLocation}
              applyFilters={applyFiltersAndSort}
              clearFilters={clearFilters}
            />
          </Col>
          {/* Event Exhibition Cards */}
          <Col xs={12} md={6} lg={9}>
            <Row>
              {/* Generate (map) All events from MongoDB to an EventCard in a column (for styling) */}
              {events ? (
                events.map((event) => (
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
                ))
              ) : (
                <Col>
                  <p>No events match your filters.</p>
                  <button onClick={clearFilters}>Clear Filters</button>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default UpcomingPage;
