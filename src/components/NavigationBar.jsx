// Top Navigation Bar

// Import
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { getUserById } from "../services/getExhibitoData";
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
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    ticketPrice: "",
    maxSeats: "",
    thumbnail: "",
  });

  // What role for logged in user?
  const [userRole, setUserRole] = useState(null);

  // Arthouse Id (if an arthouse is logged in)
  const [loggedInArtHouseId, setLoggedInArtHouseId] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      console.log("Logged-in user details - decoded token:", decodedToken);
      setUserRole(decodedToken.userType);

      if (decodedToken.userType === "house") {
        getUserById(decodedToken.userId)
          .then((response) => {
            const artHouseId = response.artHouseId;
            setLoggedInArtHouseId(artHouseId);
          })
          .catch((error) => {
            console.error("Error fetching user details:", error);
          });
      }
    }
  }, []);

  // Modal A Handlers
  const handleModalAClose = () => setModalAOpen(false);
  const handleModalAOpen = () => setModalAOpen(true);
  // Next Button
  const handleNextBtn = () => {
    handleModalAClose();
    handleModalBOpen();
  };

  // Modal B Handlers
  const handleModalBClose = () => setModalBOpen(false);
  const handleModalBOpen = () => setModalBOpen(true);
  // Back Button
  const handleBackBtn = () => {
    handleModalBClose();
    handleModalAOpen();
  };
  // Submit Button
  const handleSubmitBtn = () => {
    console.log("Submit Button Pressed");
    // Create new event in backend
    createNewEvent();
    handleModalBClose();
  };

  // Adding the new event
  function createNewEvent() {
    const newEventData = {
      artHouseId: loggedInArtHouseId,
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
    addNewEvent(newEventData)
      .then((response) => {
        if (response && response.data) {
          console.log("Event created: ", response.data);
        } else {
          console.error("Error creating event: No data in response", response);
        }
      })
      .catch((error) => {
        console.error("Error creating event: ", error);
      });
  }

  return (
    <>
      {userRole ? (
        <>
          {/* Navbar */}
          <Navbar expand="lg" className="bg-canvas-white-BASE border-b border-ink-silhouette-50%">
            {/* If Standard User */}
            {userRole === "standard" && (
              <>
                <Container>
                  <Navbar.Brand href="/home">
                    <img className="h-10" src={exhibitoLogo} alt="Exhibito Home" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-nav">
                      <Nav className="align-items-center font-body">
                        <Nav.Link href="/upcoming">Upcoming</Nav.Link>
                        <Nav.Link href="/tickets" className="lg:hidden">
                          Tickets
                        </Nav.Link>
                        <Nav.Link href="/profile" className="lg:hidden">
                          Profile
                        </Nav.Link>
                      </Nav>
                      <Nav className="align-items-center">
                        <Nav.Link href="/tickets" className="hidden lg:block">
                          {/* Ticket SVG */}
                          <svg
                            className="h-8 lg:ml-3 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="m480-404 60 46q11 9 24 .5t8-22.5l-24-76 67-52q11-9 6-22.5T602-544h-78l-25-77q-5-14-19-14t-19 14l-25 77h-79q-14 0-18.5 13.5T345-508l65 52-24 77q-5 14 7 22.5t24-.5l63-47ZM160-160q-33 0-56.5-23.5T80-240v-135q0-11 7-19t18-10q24-8 39.5-29t15.5-47q0-26-15.5-47T105-556q-11-2-18-10t-7-19v-135q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v135q0 11-7 19t-18 10q-24 8-39.5 29T800-480q0 26 15.5 47t39.5 29q11 2 18 10t7 19v135q0 33-23.5 56.5T800-160H160Z" />
                          </svg>
                        </Nav.Link>
                        <Nav.Link href="/profile" className="hidden lg:block">
                          {/* Account Circle SVG */}
                          <svg
                            className=" h-10 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                          </svg>
                        </Nav.Link>
                      </Nav>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </>
            )}
            {/* IF House User */}
            {userRole === "house" && (
              <>
                <Container>
                  <Navbar.Brand href="/home">
                    <img className="h-10" src={exhibitoLogo} alt="Exhibito Home" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-nav">
                      <Nav className="align-items-center font-body">
                        <Nav.Link href="/upcoming">Upcoming</Nav.Link>
                        <Nav.Link href="/profile" className="lg:hidden">
                          House Profile
                        </Nav.Link>
                      </Nav>
                      <Nav className="align-items-center">
                        <PrimaryBtn label="Add Event" onClick={handleModalAOpen} />

                        <Nav.Link href="/profile" className="group hidden lg:block">
                          {/* House SVG */}
                          <svg
                            className="h-10 lg:ml-3 fill-ink-silhouette-BASE group-hover:fill-scarlet-melody-BASE"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M280-160q-33 0-56.5-23.5T200-240v-286l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l111 85v-22q0-25 17.5-42.5T700-800q25 0 42.5 17.5T760-740v114l128 98q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v286q0 33-23.5 56.5T680-160h-40q-33 0-56.5-23.5T560-240v-80q0-33-23.5-56.5T480-400q-33 0-56.5 23.5T400-320v80q0 33-23.5 56.5T320-160h-40Zm120-399h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Z" />
                          </svg>
                        </Nav.Link>
                      </Nav>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </>
            )}
            {/* IF Admin User */}
            {userRole === "admin" && (
              <>
                <Container>
                  <Navbar.Brand href="/admin">
                    <img className="h-10" src={exhibitoLogo} alt="Exhibito Admin Dash" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="custom-nav">
                      <Nav className="align-items-center font-body">
                        <Nav.Link href="/profile" className="lg:hidden">
                          Admin Profile
                        </Nav.Link>
                      </Nav>
                      <Nav className="align-items-center">
                        <Nav.Link
                          href="/profile"
                          className="group hidden lg:flex lg:items-center lg:ml-3"
                        >
                          {/* Admin Icon SVG */}
                          <h5 className="m-0 font-body text-ink-silhouette-BASE group-hover:text-scarlet-melody-BASE">
                            Admin
                          </h5>
                          <svg
                            className="h-10 lg:ml-1 fill-ink-silhouette-BASE group-hover:fill-scarlet-melody-BASE"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                          >
                            <path d="M480-440q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0 276q59-19 104.5-59.5T664-315q-43-22-89.5-33.5T480-360q-48 0-94.5 11.5T296-315q34 51 79.5 91.5T480-164Zm0 80q-7 0-13-1t-12-3q-135-45-215-166.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v189q0 140-80 261.5T505-88q-6 2-12 3t-13 1Z" />
                          </svg>
                        </Nav.Link>
                      </Nav>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </>
            )}
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
      ) : (
        ""
      )}
    </>
  );
}

export default NavigationBar;
