// User Profile Page

// Import
import NavigationBar from "../components/NavigationBar";
import "../styles/UserProfile.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import EventTicket from "../components/cards/TicketsCard";
import UserImage from "../assets/images/User-image.png";

function UserProfilePage() {
  return (
    <div>
      <NavigationBar />
      <div className="container mt-4">
        <h1 className="font-display">User Profile</h1>

        <div className="row mt-5">
          <div className="col-3">
            <div>
              <img src={UserImage} alt="blackandwhite" className="user-profile-img"></img>
            </div>
          </div>
          <div className="col-9">
            <h2 className="font-body mt-3"> Name and Surname</h2>
            <div className="flex items-center">
            <svg className="h-8" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#D88776"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z"/></svg>
            <div className="w-2"></div>
            <p className="font-body mt-3">useremail@gmail.com</p>
            </div>
            <div className="flex items-center">
            <p className="font-body number">+27 82 123 1234</p>
            </div>
            <PrimaryBtn label="Log Out" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="font-display">Your Events</h2>
        <EventTicket />
        <EventTicket />
      </div>
    </div>
  );
}

export default UserProfilePage;
