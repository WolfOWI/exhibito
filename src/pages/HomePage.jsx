// Home Page

// Import
import NavigationBar from "../components/NavigationBar";
import Button from "react-bootstrap/Button";
import Footer from "../components/Footer";

// Import Imagery
import HeroImage from "../assets/images/Placeholder.webp";

// Import Bootstrap Components
import { Carousel, Row, Col, } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import EventCard from "../components/cards/EventCard";

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
        <Button className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `}>
          Browse Events
        </Button>
      </div>

      <Container className="mt-6">
        {/* Highlighted Events Section */}

        {/* Heading Section */}
        <div className='Highlighted-Events-Section'>
          <h1 style={{
            color: 'black',
            fontFamily: 'DM Serif Display',
            fontSize: '39px',
            float: 'left',
            marginBottom: '45px',
          }}>

            Highlighted Events
            <Button className={`bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE `} style={{ marginLeft: '795px' }}>
              Browse Events
            </Button>
          </h1>

          {/* Carousel with Scroller */}
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
              </Row>
            </Carousel.Item>

            <Carousel.Item>
              <Row>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                  <EventCard />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>


        {/* Heading Section */}
        <div className='container Art-Houses-Section'>
          <h1 style={{
            color: 'black',
            fontFamily: 'DM Serif Display',
            fontSize: '39px',
            marginTop: '40px',
            marginLeft: '0px',
            marginBottom: '45px',

          }}>
            Art Houses
          </h1>
        </div>

        {/* Art House 1 */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px', gap: '20px' }}>
          <div className="Art-House-1" style={{ maxWidth: '550px' }}>
            <Card className="cursor-pointer group p-3 border-none bg-transparent rounded-[40px]">
              <style>
                {`
              .multi-line-truncation {
                display: -webkit-box;
                -webkit-line-clamp: 2; /* Number of lines */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}
              </style>
              <Card.Img
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE"
                src="https://www.saic.edu/sites/default/files/styles/16_9_768x432/public/2023-06/030223_2234_0.jpg.jpeg?itok=kNLCWZjv"
              />
            </Card>
          </div>

          {/* Text Section */}
          <div>
            <h3
              style={{
                color: 'black',
                fontFamily: 'DM Serif Display',
                fontSize: '31px',
                marginLeft: '100px',
              }}
            >
              Arthouse 1
            </h3>
            <p
              style={{
                color: 'black',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                marginLeft: '100px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button

              className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `} style={{ marginLeft: '100px' }}
            >
              Browse Events
            </Button>
          </div>
        </div>

        {/* Art House 2 */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '90px', gap: '20px', marginTop: '45px', }}>

          {/* Text Section */}
          <div>
            <h3
              style={{
                color: 'black',
                fontFamily: 'DM Serif Display',
                fontSize: '31px',
              }}
            >
              Arthouse 2
            </h3>
            <p
              style={{
                color: 'black',
                fontFamily: 'DM Sans',
                fontSize: '16px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button

              className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `} 
            >
              Browse Events
            </Button>
          </div>

          <div className="Art-House-2" style={{ maxWidth: '550px'}}>
            <Card className="cursor-pointer group p-3 border-none bg-transparent rounded-[40px] float-right">
              <style>
                {`
              .multi-line-truncation {
                display: -webkit-box;
                -webkit-line-clamp: 2; /* Number of lines */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}
              </style>
              <Card.Img style={{marginLeft: '135px'}}
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE"
                src="https://www.saic.edu/sites/default/files/styles/16_9_768x432/public/2023-06/030223_2234_0.jpg.jpeg?itok=kNLCWZjv"
              />
            </Card>
          </div>
        </div>

        {/* Art House 3 */}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '0px', gap: '20px', marginTop: '45px' }}>
          <div className="Art-House-3" style={{ maxWidth: '550px' }}>
            <Card className="cursor-pointer group p-3 border-none bg-transparent rounded-[40px]">
              <style>
                {`
              .multi-line-truncation {
                display: -webkit-box;
                -webkit-line-clamp: 2; /* Number of lines */
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            `}
              </style>
              <Card.Img
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE"
                src="https://www.saic.edu/sites/default/files/styles/16_9_768x432/public/2023-06/030223_2234_0.jpg.jpeg?itok=kNLCWZjv"
              />
            </Card>
          </div>

          {/* Text Section */}
          <div>
            <h3
              style={{
                color: 'black',
                fontFamily: 'DM Serif Display',
                fontSize: '31px',
                marginLeft: '100px',
              }}
            >
              Arthouse 3
            </h3>
            <p
              style={{
                color: 'black',
                fontFamily: 'DM Sans',
                fontSize: '16px',
                marginLeft: '100px',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button

              className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `} style={{ marginLeft: '100px' }}
            >
              Browse Events
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
