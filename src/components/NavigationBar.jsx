// Top Navigation Bar

// Import
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { addNewEvent } from "../services/createExhibitoData";
import "../styles/navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PrimaryBtn from "./buttons/PrimaryBtn";
import AddEventModalA from "./AddEventModalA";
import AddEventModalB from "./AddEventModalB";
import exhibitoLogo from "../assets/logos/logoV1.svg";

function NavigationBar() {
  // Modal State (Open/close)
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);

  // Modal New Event Form State (Details)
  const [newEvent, setNewEvent] = useState([]);

  // What role for logged in user?
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserRole(decodedToken.userType);
    }
  }, []);

  // Modal A Handlers
  const handleModalAClose = () => setModalAOpen(false);
  const handleModalAOpen = () => setModalAOpen(true);
  const handleNextBtn = () => {
    // Next Button
    handleModalAClose();
    handleModalBOpen();
  };

  // Modal B Handlers
  const handleModalBClose = () => setModalBOpen(false);
  const handleModalBOpen = () => setModalBOpen(true);
  const handleBackBtn = () => {
    // Back Button
    handleModalBClose();
    handleModalAOpen();
  };
  const handleSubmitBtn = () => {
    // Submit Button
    handleModalBClose();
    // Create new event in backend
    createNewEvent();
  };

  // Adding the new event
  function createNewEvent() {
    const newEventData = {
      artHouseId: "663de7cebb036aad91e8c5fb",
      title: newEvent.title,
      description: newEvent.description,
      location: newEvent.location,
      startDate: newEvent.startDate,
      endDate: newEvent.endDate,
      startTime: newEvent.startTime,
      endTime: newEvent.endTime,
      ticketPrice: newEvent.ticketPrice,
      maxSeats: newEvent.maxSeats,
      availableSeats: newEvent.maxSeats,
      thumbnail: newEvent.thumbnail,
      status: "Pending",
    };

    console.log("Creating new event: " + newEventData.title);
    console.log(newEventData);
    addNewEvent(newEventData);
  }

  return (
    <>
      <Navbar expand="lg" className="bg-canvas-white-BASE border-b border-ink-silhouette-50%">
        <Container>
          <Navbar.Brand href="/home">
            <img className="h-10" src={exhibitoLogo} alt="Exhibito Home" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="custom-nav">
              <Nav className="align-items-center font-body">
                {userRole === "admin" && (
                  <>
                    <Nav.Link href="/admin">Admin Dashboard</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  </>
                )}
                {userRole === "house" && (
                  <>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/upcoming">Upcoming</Nav.Link>
                    <Nav.Link href="/tickets">Tickets</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <PrimaryBtn label="Add Event" onClick={handleModalAOpen} />
                  </>
                )}
                {userRole === "standard" && (
                  <>
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/upcoming">Upcoming</Nav.Link>
                    <Nav.Link href="/tickets">Tickets</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                  </>
                )}
                {!userRole && (
                  <>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/">Log In</Nav.Link>
                  </>
                )}
              </Nav>
              <Nav className="align-items-center">
                {userRole && (
                  <>
                    <Nav.Link href="/tickets" className="md:hidden lg:block">
                      <svg
                        className="h-8 lg:ml-3 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="m480-404 60 46q11 9 24 .5t8-22.5l-24-76 67-52q11-9 6-22.5T602-544h-78l-25-77q-5-14-19-14t-19 14l-25 77h-79q-14 0-18.5 13.5T345-508l65 52-24 77q-5 14 7 22.5t24-.5l63-47ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Z" />
                      </svg>
                    </Nav.Link>
                    <Nav.Link href="/profile" className="md:hidden lg:block">
                      <svg
                        className=" h-10 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                      </svg>
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddEventModalA
        show={modalAOpen}
        onHide={handleModalAClose}
        onNextClick={handleNextBtn}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
      />
      <AddEventModalB
        show={modalBOpen}
        onHide={handleModalBClose}
        onBackClick={handleBackBtn}
        onSubmitClick={handleSubmitBtn}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
      />
    </>
  );
}

export default NavigationBar;
