// Home Page

// IMPORT
// -----------------------------------------------
// Custom CSS
import "../styles/homepage.css";

// React Hooks
import { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

// Import Bootstrap Components
import { Carousel, Row, Col, Container, Card, Button } from "react-bootstrap";
import EventCard from "../components/cards/EventCard";

// Import Custom Components
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

// Import Functions
import { getAllEvents } from "../services/getExhibitoData";

// Import Imagery
import HeroImage from "../assets/images/Hero-img.png";
import SpectrumStudios from "../assets/images/SpectrumStudios.png";
import TheArtLoft from "../assets/images/TheArtLoft.png";
import AvantGardeGalleryImg from "../assets/images/Arthouse-2.png";
// -----------------------------------------------

function HomePage() {
  const windowSize = useWindowSize(); // Current Window Width
  const [events, setEvents] = useState([]); // Events stored
  const [carouselIndex, setCarouselIndex] = useState(0); // Track current carousel index

  // On Page Load, get events data from MongoDB and set store in the highlighted events
  useEffect(() => {
    // TODO Turn back on!
    // window.scrollTo(0, 0);
    getAllEvents()
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const featuredEventIndices = [1, 4, 5, 6, 8, 10, 12, 13];
  const featuredEvents = featuredEventIndices
    .map((index) => events[index])
    .filter((event) => event !== undefined);

  // Determine chunk size based on window width
  const getChunkSize = () => {
    if (windowSize.width <= 992) return 1; // 1 card per row on small screens
    if (windowSize.width <= 1200) return 2; // 2 cards per row on medium devices
    return 4; // 4 cards per row on larger screens
  };

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const eventChunks = chunkArray(featuredEvents, getChunkSize());

  // Handle carousel index reset on resize (prevent breaking)
  useEffect(() => {
    if (carouselIndex >= eventChunks.length) {
      setCarouselIndex(0); // Reset index if it's out of bounds after resizing
    }
  }, [windowSize, eventChunks.length, carouselIndex]);

  const renderEventCards = (eventList) => {
    return eventList.map((event, index) => (
      <Col xs={12} lg={6} xl={3} key={event._id}>
        <EventCard
          eventIdNum={event._id}
          thumbnail={event.thumbnail}
          title={event.title}
          desc={event.description}
          ticketPrice={event.ticketPrice}
          avSeats={event.availableSeats}
          maxSeats={event.maxSeats}
          startTime={event.startTime}
          endTime={event.endTime}
          startDate={event.startDate}
          endDate={event.endDate}
          location={event.location}
        />
      </Col>
    ));
  };

  return (
    <div style={{ backgroundColor: "#f3f1ee" }}>
      <NavigationBar />
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "740px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: 1,
        }}
      >
        {/* Hero Text */}
        <h1 className="font-display text-canvas-white-BASE">Exhibito</h1>
        <h4 className="font-body text-canvas-white-BASE text-sm md:text-base px-3 text-center">
          Explore our different Art Houses and their amazing Exhibitions
        </h4>
        <Button
          href="/upcoming"
          className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body mt-3`}
        >
          Browse Events
        </Button>
      </div>

      {/* Home Page Contents */}
      <Container className="mt-6">
        {/* Carousel Title */}
        <div className="Highlighted-Events-Section">
          <div className="flex justify-between w-full">
            <h1 className="text-ink-silhouette-BASE font-display text-4xl">Highlighted Events</h1>
            <Button
              href="/upcoming"
              className={`bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE h-fit`}
            >
              Browse Events
            </Button>
          </div>
          {/* Carousel with Scroller */}
          <Carousel
            activeIndex={carouselIndex}
            onSelect={(selectedIndex) => setCarouselIndex(selectedIndex)}
            indicators={true}
            controls={true}
            className="custom-carousel"
          >
            {eventChunks.map((chunk, idx) => (
              <Carousel.Item key={idx}>
                <Row>{renderEventCards(chunk)}</Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Art Houses Section */}
        <Container className="mt-16">
          <h1 className="text-ink-silhouette-BASE font-display text-4xl">Art Houses</h1>
          {/* Art House 1 */}
          <div className="flex items-center md:gap-8 xl:gap-32 mt-16 md:mt-4">
            <Card className="hidden md:block group p-3 border-none bg-transparent rounded-[40px]">
              <Card.Img
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE h-[300px] w-[600px] xl:w-[1000px]"
                src={SpectrumStudios}
              />
            </Card>
            <div>
              <h3 className="font-display fs-2">Spectrum Studios</h3>
              <p className="font-body">
                Exhibits include virtual reality experiences, multimedia installations, and
                experimental works that engage visitors through technology and creativity.
              </p>
              <Button
                href="/upcoming"
                className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `}
              >
                Browse Events
              </Button>
            </div>
          </div>

          {/* Art House 2 */}
          <div className="flex items-center md:gap-8 xl:gap-32 mt-16 md:mt-4">
            <div>
              <h3 className="font-display fs-2">The Avant-Garde Gallery</h3>
              <p className="font-body">
                Visitors can expect to see cutting-edge installations, abstract art, and multimedia
                projects that push the limits of artistic expression that provoke thought.
              </p>
              <Button
                href="/upcoming"
                className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `}
              >
                Browse Events
              </Button>
            </div>
            <Card className="hidden md:block group p-3 border-none bg-transparent rounded-[40px]">
              <Card.Img
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE h-[300px] w-[1000px] xl:w-[1500px]"
                src={AvantGardeGalleryImg}
              />
            </Card>
          </div>

          {/* Art House 3 */}
          <div className="flex items-center md:gap-8 xl:gap-32 mt-16 md:mt-4">
            <Card className="hidden md:block group p-3 border-none bg-transparent rounded-[40px]">
              <Card.Img
                className="h-90 object-cover rounded-tl-[80px] rounded-tr-none rounded-bl-none rounded-br-[80px] border-4 border-scarlet-melody-BASE group-hover:border-sapphire-whisper-BASE bg-scarlet-melody-BASE group-hover:bg-sapphire-whisper-BASE h-[300px] w-[1000px] xl:w-[1500px]"
                src={TheArtLoft}
              />
            </Card>
            <div>
              <h3 className="font-display fs-2">The Art Loft</h3>
              <p className="font-body">
                The Art Loft is a hub for contemporary art. The gallery showcases modern paintings,
                street art, and experimental works. It also hosts rotating exhibitions, artist
                residencies, and community events that foster artistic collaboration.
              </p>
              <Button
                href="/upcoming"
                className={`bg-scarlet-melody-BASE hover:bg-scarlet-melody-40% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body `}
              >
                Browse Events
              </Button>
            </div>
          </div>
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
