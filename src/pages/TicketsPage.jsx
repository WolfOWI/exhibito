// Tickets Page (Cart)

// Import
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import AddedCard from "../components/cards/AddedCard";
import "../styles/pendingEventCard.css";
import SecondaryBtn from "../components/buttons/SecondaryBtn";
import PrimaryBtn from "../components/buttons/PrimaryBtn";


// Import Bootstrap Components
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function TicketsPage() {
  return (

    <div style={{ backgroundColor: '#f3f1ee' }}>
      <NavigationBar />

      <Container className="mt-6">
        {/* Highlighted Events Section */}

        {/* Heading Section */}
        <div className='Highlighted-Events-Section'>
          <h1 style={{
            color: 'black',
            fontFamily: 'DM Serif Display',
            fontSize: '39px',
            float: 'left',
          }}>

            Added To Your Cart
            <Button className={`bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE `} style={{ marginLeft: '795px' }}>
              Browse Events
            </Button>
          </h1>

            <p className="font-body">
            Below are the events that you have added to your card.
            </p>
            <AddedCard />
            <AddedCard />
            <AddedCard />
            <AddedCard />
            <AddedCard />

          {/* Check Out Section */}
          <div className="card-rectangle">
            <div className="row">
                 <div className="col-3">
                    <h4 className="font-body" style={{marginTop: '5px'}}>Proceed to Checkout</h4>
                 </div>
                 <div className="col-2" style={{marginLeft: '321px', fontWeight: 'bold'}}>
                        <p className="font-body mt-2">Quantity: 00</p>
                    </div>
                    <div className="col-2" style={{fontWeight: 'bold'}}>
                        <p className="font-body mt-2">Total Cost: R000.00</p>
                    </div>
                 <div className="col-1"></div>
                 <div className="col-3" style={{marginLeft: '1030px', marginTop: '-50px',}}>
                    <div className="row">
                        <div className="col-6 btns" style={{marginLeft: '75px'}}>
                            <PrimaryBtn label="Check Out" />
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default TicketsPage;
