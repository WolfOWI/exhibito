// Top Navigation Bar

// Import Bootstrap React Elements
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Exhibito</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/login">Upcoming</Nav.Link>
            <Nav.Link href="/login">EventInfo</Nav.Link>
            <Nav.Link href="/login">Tickets</Nav.Link>
            <Nav.Link href="/login">Profile</Nav.Link>
            <Nav.Link href="/login">Admin</Nav.Link>
            <Button variant="primary">New Exhibition</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
