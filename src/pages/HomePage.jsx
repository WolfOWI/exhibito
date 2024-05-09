// Home Page

// Import custom CSS
import "../styles/HomePage.css";

// Import
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";


// Import Imagery
import HeroImage from "../assets/images/Placeholder.webp";

function HomePage() {
  return (
    <div style={{ backgroundColor: '#f3f1ee' }}>
      <NavigationBar />

      {/* Hero Image */}
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '740px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 1,
        }}>

        {/* Hero Text */}
        <h2 style={{
          color: 'black',
          // backgroundColor: 'rgba(255, 255, 255, 0.5)',  // 
          borderRadius: '5px',
          width: '1000px',
          textAlign: 'center',
          fontFamily: 'DM Serif Display',
          fontSize: '25px',
          // padding: '20px',  // 
          marginBottom: '40px',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis eleifend quam.
        </h2>
        <Button className="bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-none rounded-full px-4 py-2 font-body">
          Browse Events
        </Button>
      </div>

      <div className='Highlighted-Events-Section'>
        <h1 style={{
          color: 'black',
          fontFamily: 'DM Serif Display',
          fontSize: '39px',
          marginTop: '40px',
          marginLeft: '162px',
          
        }}>
          Highlighted Events
          <Button
            style={{
              border: '2px solid #D88776',
              backgroundColor: 'transparent', 
              borderRadius: 'fully-rounded', 
              padding: '10px 20px',
              color: '#D88776', 
              fontFamily: 'DM Sans', 
              fontSize: '16px',
              float: 'right',
              marginRight: '162px'
            }}
            className="hover:bg-opacity-20 hover:bg-[#D88776]" 
          >
            Browse Events
          </Button>
        </h1>

        

      </div>

    </div>
  );
}

export default HomePage;
