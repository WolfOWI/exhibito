import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import "../styles/UserProfile.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import EventTicket from "../components/cards/TicketsCard";
import { useNavigate } from "react-router-dom";

// Images
import UserImage from "../assets/images/User-image.png";
import AdminImage from "../assets/images/adminProfileImg.png";
import HouseImage from "../assets/images/houseProfileImg.png";

function UserProfilePage() {
  const [user, setUser] = useState(null); // Logged in user

  const navigate = useNavigate(); // Navigate when logging out / not logged in

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem("token");

        // If logged in token does not exist
        if (!token) {
          navigate("/");
          return;
        }
        const response = await axios.get("http://localhost:3001/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        {user.userType === "standard" && <h1 className="font-display">User Profile</h1>}
        {user.userType === "house" && <h1 className="font-display">House Profile</h1>}
        {user.userType === "admin" && <h1 className="font-display">Admin Profile</h1>}

        <div className="row mt-5">
          <div className="col-3">
            <div>
              {user.userType === "standard" && (
                <img src={UserImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
              {user.userType === "house" && (
                <img src={HouseImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
              {user.userType === "admin" && (
                <img src={AdminImage} alt="blackandwhite" className="user-profile-img"></img>
              )}
            </div>
          </div>
          <div className="col-9">
            <h2 className="font-body mt-3">{user.username}</h2>
            <div className="flex items-center">
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
            <div className="flex items-center">
              <p className="font-body number">{user.mobile}</p>
            </div>
            <PrimaryBtn label="Log Out" onClick={handleLogout} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {user.userType === "standard" && (
          <>
            <h2 className="font-display">Booked Events</h2>
            <EventTicket />
            <EventTicket />
          </>
        )}
        {user.userType === "house" && (
          <>
            <h2 className="font-display">House Events</h2>
            <h3 className="font-body">Add New Event</h3>
          </>
        )}
        {user.userType === "admin" && <></>}
      </div>
      <div className="h-24">{/* Spacer */}</div>
    </div>
  );
}

export default UserProfilePage;
