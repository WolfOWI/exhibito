// Upcoming Exhibitions Page

// Import Custom Components
import NavigationBar from "../components/NavigationBar";
import SortDropdown from "../components/dropdowns/SortDropdown";
import EventCard from "../components/cards/EventCard";
import FilterCard from "../components/cards/FilterCard";

// Import Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// TESTING MONGO GET REQUEST
fetch("http://localhost:3001/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error("Error:", err));

function UpcomingPage() {
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
              <Col xs={12} lg={6} xl={4}>
                <EventCard />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <EventCard />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <EventCard />
              </Col>
              <Col xs={12} lg={6} xl={4}>
                <EventCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UpcomingPage;
