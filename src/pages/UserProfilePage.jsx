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
            <p className="font-body mt-3">useremail@gmail.com</p>
            <p className="font-body number">+27 82 123 1234</p>
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
