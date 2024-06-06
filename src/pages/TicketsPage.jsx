// Tickets Page (Cart)

// Import
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CartCard from "../components/cards/CartCard";
import "../styles/pendingEventCard.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";

// Import Bootstrap Components
import Container from "react-bootstrap/Container";

function TicketsPage() {
  return (
    <div style={{ backgroundColor: "#f3f1ee" }}>
      <NavigationBar />

      <Container className="mt-6">
        <div className="flex flex-col">
          <h1
            style={{
              color: "black",
              fontFamily: "DM Serif Display",
              fontSize: "39px",
              float: "left",
            }}
          >
            Added To Your Cart
          </h1>

          <p className="font-body">Below are the events that you have added to your cart.</p>
        </div>

        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />
        <CartCard />

        {/* Check Out Section Mobile View */}
        <div className="flex md:hidden flex-col border-t-2 border-ink-silhouette-40% pt-5">
          <div className="flex justify-between mx-3">
            <h4 className="font-body fw-bold">Total Cost</h4>
            <h2 className="font-body">R000.00</h2>
          </div>
          <PrimaryBtn label="Check Out" />
        </div>
        {/* Check Out Section Desktop View */}
        <div className="hidden md:flex justify-between border-t-2 border-ink-silhouette-40% pt-5">
          <h4 className="font-body fw-bold">Total Cost</h4>
          <div className="flex flex-col items-center">
            <h4 className="font-body">R00.00</h4>
            <PrimaryBtn label="Check Out" />
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default TicketsPage;
