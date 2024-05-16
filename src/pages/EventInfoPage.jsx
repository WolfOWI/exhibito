// Event Info Page (Specific)

// Import
import NavigationBar from "../components/NavigationBar";
import EventImage from "../assets/images/homepage.png"
import "../styles/EventInfo.css"
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Footer from "../components/Footer";

function EventInfoPage() {
  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="event-image mt-5">
          <img src={EventImage} alt="Event Image" className="event-img"></img>
        </div>
        <h1 className="font-display mt-5">Exhibition Title</h1>
        <h3 className="font-body text-scarlet-melody-BASE mt-1">R200-R250</h3>
        
        <p className="font-body">Event Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam.</p>
        <ul className="font-body mt-1">
          <li>Arthouse: Arthouse 1</li>
          <li>Location: Centurion, Pretoria</li>
          <li>Exhibition Date: 00/00/0000 - 00/00/0000</li>
          <li>Exhibition times: 18:00 - 21:00</li>
        </ul>
        <PrimaryBtn label="Book Now" />
      </div>

      <div className="container">
        <h2 className="font-display mt-4">Featured Artists</h2>
        <div className="row mt-5">
        </div>
      </div>

      <div className="container mt-5">
        <h2 className="font-display">Leave a Review</h2>
        <div className="row">
          <div className="col-10">
            <label className="comment-input font-body">
              Leave a Comment:
              <textarea name="description" required/>
            </label>
          </div>
          <div className="col-2 mt-4">
            <PrimaryBtn label="Post Review" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default EventInfoPage;
