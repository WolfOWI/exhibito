// Home Page

// Import custom CSS
import "../styles/HomePage.css";

// Import
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";

import EventCard from "../components/cards/EventCard";


// Import Imagery
import HeroImage from "../assets/images/Placeholder.webp";

// Import Bootstrap Components
import { Carousel, Row, Col } from 'react-bootstrap';


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
        <Button className="bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body">
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
          <Button className="bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE" style={{ float: 'right', marginRight: '162px' }}>
            Browse Events
          </Button>
        </h1>

        {/* Carousel */}
        <Row style={{ marginTop: '45px', marginLeft: '150px' }}>
          <Col xs={16} md={6} lg={9}>
            <Carousel interval={3000} pause='hover'>
              <Carousel.Item>
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
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

      </div>

    </div>
  );
}

export default HomePage;
