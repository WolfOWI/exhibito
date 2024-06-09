import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import "../styles/UserProfile.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import BookedTicket from "../components/cards/BookedTicket";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import {
  getUserById,
  getHouseById,
  getTicketsByStatus,
  getEventById,
} from "../services/getExhibitoData";

// Images
import UserImage from "../assets/images/User-image.png";
import AdminImage from "../assets/images/adminProfileImg.png";
import HouseImage from "../assets/images/houseProfileImg.png";

function UserProfilePage() {
  const [user, setUser] = useState(null); // Logged in user
  const [house, setHouse] = useState(null); // House details (if house user is logged in)
  const [bookedTickets, setBookedTickets] = useState([]); // Booked tickets
  const [bookedEvents, setBookedEvents] = useState([]); // Booked events
  const navigate = useNavigate(); // Navigate

  // Get House & User details from stored token (logged in)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("token");

        // If logged in token does not exist
        if (!token) {
          navigate("/");
          return;
        }
        // Decode token to get userId
        const decodedToken = jwtDecode(token);

        // Get User By Id
        getUserById(decodedToken.userId)
          .then((userData) => {
            console.log(userData);
            setUser(userData); // Set user data
            const artHouseId = userData.artHouseId;

            if (userData.artHouseId !== "none") {
              getHouseById(artHouseId).then((houseData) => {
                console.log(houseData);
                setHouse(houseData);
              });
            }
            // Fetch booked tickets
            return getTicketsByStatus(userData._id, "booked");
          })
          .then(async (tickets) => {
            console.log(tickets);
            setBookedTickets(tickets);
            // Fetch event details for each booked ticket
            const eventPromises = tickets.map((ticket) => getEventById(ticket.eventId));

            const events = await Promise.all(eventPromises);
            setBookedEvents(events);
          })

          .catch((error) => {
            console.error("Error fetching user details:", error);
          });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Delete token if logging out
    sessionStorage.removeItem("token");
    navigate("/");
  };

  // Cancel button on booked events ticket (standard users)
  const handleCancelTicket = (ticketId) => {
    setBookedTickets((prevTickets) => prevTickets.filter((ticket) => ticket._id !== ticketId));
    setBookedEvents((prevEvents, index) => prevEvents.filter((event, i) => i !== index));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        {user.userType === "standard" && <h1 className="font-display">User Profile</h1>}
        {house && user.userType === "house" ? (
          <h1 className="font-display">
            {house.name} <span className="text-ink-silhouette-30%">Art House</span>
          </h1>
        ) : (
          ""
        )}
        {user.userType === "admin" && <h1 className="font-display">Admin Profile</h1>}

        <div className="row mt-5">
          <div className="col-3">
            <div>
              {/* Standard */}
              {user.userType === "standard" && (
                <img src={UserImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
              {/* House */}
              {user.userType === "house" && (
                <img src={HouseImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
              {/* Admin */}
              {user.userType === "admin" && (
                <img src={AdminImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
            </div>
          </div>
          <div className="col-9">
            {/* User Name */}
            <h2 className="font-body fw-bold mt-3">{user.username}</h2>
            {/* User Email */}
            <div className="flex items-center mt-[-10px]">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#D88776"
              >
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z" />
              </svg>
              <div className="w-2"></div>
              <p className="font-body mt-3">{user.email}</p>
            </div>
            {/* User Mobile */}
            <div className="flex items-center mb-4 mt-[-10px]">
              <svg
                className="h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#D88776"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
              </svg>
              <div className="w-2"></div>
              <p className="font-body mt-3">{user.mobile}</p>
            </div>
            <PrimaryBtn label="Log Out" onClick={handleLogout} className="mt-2" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* Standard */}
        {user.userType === "standard" && (
          <>
            {bookedTickets.length > 0 ? (
              <div>
                <h2 className="font-display">Booked Events</h2>
                {bookedTickets.map((ticket, index) => (
                  <BookedTicket
                    key={ticket._id}
                    ticket={ticket}
                    eventDetails={bookedEvents[index]}
                    onCancel={handleCancelTicket}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full flex my-5">
                <div className="flex flex-col">
                  <h2 className="font-display">No Booked Events</h2>
                  <p className="font-body">
                    In order for events to be booked, please add them to your cart, and then click
                    on 'Book Events'.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
        {/* House */}
        {house && user.userType === "house" ? (
          <>
            <div className="mt-6">
              <h2 className="font-display mb-2">Art House Details</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <p className="font-body">{house.description}</p>
                </div>
                {/* House Mobile */}
                <div className="flex items-center">
                  <svg
                    className="h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#6e9297"
                  >
                    <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
                  </svg>
                  <div className="w-2"></div>
                  <p className="font-body mt-3">{house.mobile}</p>
                </div>
                {/* House Email */}
                <div className="flex items-center">
                  <svg
                    className="h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#6e9297"
                  >
                    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z" />
                  </svg>
                  <div className="w-2"></div>
                  <p className="font-body mt-3">{house.email}</p>
                </div>
                {/* House Address */}
                <div className="flex items-center">
                  <svg
                    className="h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    fill="#6e9297"
                  >
                    <path d="M160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H600q-17 0-28.5-11.5T560-160v-200q0-17-11.5-28.5T520-400h-80q-17 0-28.5 11.5T400-360v200q0 17-11.5 28.5T360-120H240q-33 0-56.5-23.5T160-200Z" />
                  </svg>
                  <div className="w-2"></div>
                  <p className="font-body mt-3">{house.address}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        {/* Admin */}
        {user.userType === "admin" && <></>}
      </div>
      <div className="h-24">{/* Spacer */}</div>
    </div>
  );
}

export default UserProfilePage;
