import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PrimaryBtn from "./buttons/PrimaryBtn";
import logo from "../assets/logos/logoV1.svg";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubscribedEmail(email); // Store the current email value
    setShowModal(true); // Show the modal
    setEmail(""); // Clear the email field
  };

  return (
    <div className="bg-canvas-white-BASE border-t-2 border-ink-silhouette-BASE mt-16">
      {/* Footer Contents */}
      <Container className="flex flex-col lg:flex-row py-16 justify-content-between lg:items-start">
        {/* Left side container */}
        <div className="flex lg:w-[30%] lg:justify-between sm:items-center lg:items-start">
          <Nav>
            <Nav.Link href="/home">
              <img src={logo} alt="exhibito logo" />
            </Nav.Link>
          </Nav>
          {/* Text & Socials */}
          <div className="flex-col w-[70%] lg:ml-4">
            <p className="font-body">
              Explore & book your favourite exhibitions, right from the comfort of your own home!
            </p>
            {/* Social media icons */}
            <div className="flex justify-start ">
              <Nav className="align-items-center font-display">
                <Nav.Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-ink-silhouette-BASE py-0 pl-0 pr-8"
                >
                  <svg
                    className="h-6 lg:h-6 xl:h-8 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE "
                    viewBox="0 0 43 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M33.5605 0.964417H10.0484C4.85457 0.964417 0.643555 5.051 0.643555 10.0914V32.9087C0.643555 37.949 4.85457 42.0356 10.0484 42.0356H23.2645V26.1525H17.7556V19.9348H23.2645V15.3599C23.2645 10.0571 26.6056 7.16617 31.482 7.16617C33.1255 7.16161 34.7666 7.24375 36.4007 7.40575V12.9504H33.0432C30.3863 12.9504 29.8691 14.1688 29.8691 15.9668V19.9256H36.2173L35.3921 26.1433H29.8314V42.0356H33.5605C38.7543 42.0356 42.9653 37.949 42.9653 32.9087V10.0914C42.9653 5.051 38.7543 0.964417 33.5605 0.964417Z" />
                  </svg>
                </Nav.Link>
                <Nav.Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-ink-silhouette-BASE py-0 pl-0 pr-8"
                >
                  <svg
                    className="h-6 lg:h-6 xl:h-8 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                    viewBox="0 0 43 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.6622 0.964417C5.85719 0.964417 0.321777 6.34124 0.321777 12.9469V30.0599C0.321777 36.6638 5.86232 42.0356 12.6691 42.0356H30.3031C37.1081 42.0356 42.6435 36.6588 42.6435 30.0532V12.9402C42.6435 6.33627 37.103 0.964417 30.2962 0.964417H12.6622ZM33.8265 7.80962C34.7999 7.80962 35.5899 8.57628 35.5899 9.52092C35.5899 10.4656 34.7999 11.2322 33.8265 11.2322C32.8531 11.2322 32.0631 10.4656 32.0631 9.52092C32.0631 8.57628 32.8531 7.80962 33.8265 7.80962ZM21.4826 11.2322C27.3178 11.2322 32.0631 15.8373 32.0631 21.5C32.0631 27.1627 27.3178 31.7678 21.4826 31.7678C15.6475 31.7678 10.9022 27.1627 10.9022 21.5C10.9022 15.8373 15.6475 11.2322 21.4826 11.2322ZM21.4826 14.6548C19.6119 14.6548 17.8178 15.376 16.495 16.6597C15.1722 17.9435 14.429 19.6846 14.429 21.5C14.429 23.3155 15.1722 25.0566 16.495 26.3403C17.8178 27.624 19.6119 28.3452 21.4826 28.3452C23.3534 28.3452 25.1475 27.624 26.4703 26.3403C27.7931 25.0566 28.5363 23.3155 28.5363 21.5C28.5363 19.6846 27.7931 17.9435 26.4703 16.6597C25.1475 15.376 23.3534 14.6548 21.4826 14.6548Z" />
                  </svg>
                </Nav.Link>
                <Nav.Link
                  href="https://tiktok.com"
                  target="_blank"
                  className="text-ink-silhouette-BASE p-0"
                >
                  <svg
                    className="h-6 lg:h-6 xl:h-8 fill-ink-silhouette-BASE hover:fill-scarlet-melody-BASE"
                    viewBox="0 0 43 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M37.2834 0.964417H5.0383C2.26018 0.964417 0 3.15781 0 5.85385V37.1462C0 39.8422 2.26018 42.0356 5.0383 42.0356H37.2834C40.0616 42.0356 42.3217 39.8422 42.3217 37.1462V5.85385C42.3217 3.15781 40.0616 0.964417 37.2834 0.964417ZM33.2588 18.8822C33.0301 18.9028 32.7983 18.9164 32.5636 18.9164C29.9205 18.9164 27.5978 17.5973 26.2465 15.6034C26.2465 20.8341 26.2465 26.7855 26.2465 26.8852C26.2465 31.4901 22.3993 35.2237 17.6542 35.2237C12.9091 35.2237 9.06189 31.4901 9.06189 26.8852C9.06189 22.2804 12.9091 18.5468 17.6542 18.5468C17.8336 18.5468 18.0089 18.5625 18.1852 18.5732V22.6823C18.0089 22.6617 17.8356 22.6305 17.6542 22.6305C15.2318 22.6305 13.2689 24.5354 13.2689 26.8862C13.2689 29.2371 15.2318 31.142 17.6542 31.142C20.0766 31.142 22.2159 29.2899 22.2159 26.939C22.2159 26.8461 22.2582 7.77833 22.2582 7.77833H26.305C26.6859 11.2899 29.6071 14.0612 33.2588 14.3155V18.8822Z" />
                  </svg>
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
        {/* Middle container */}
        <Nav className="font-display text-xl flex mt-8 text-center justify-center lg:flex-col lg:items-center lg:gap-1 lg:text-left lg:w-[30%] lg:mt-0">
          <Nav.Link href="/upcoming" className="text-ink-silhouette-BASE pl-0">
            Upcoming
          </Nav.Link>
          <Nav.Link href="/profile" className="text-ink-silhouette-BASE pl-0">
            Profile
          </Nav.Link>
          <Nav.Link href="/tickets" className="text-ink-silhouette-BASE pl-0">
            Cart
          </Nav.Link>
        </Nav>
        {/* Right side container */}
        <div className="flex-col lg:w-[30%] text-ink-silhouette-BASE flex-grow-1 mt-8 lg:mt-0">
          <Form.Label className="font-display fs-4" htmlFor="inputMinPrice">
            Subscribe
          </Form.Label>
          <p className="mt-[-8px] font-body">
            Enter your email to get notified about upcoming events in our weekly newsletter.
          </p>
          <div className="flex">
            <Form.Control
              type="email"
              id="inputMinPrice"
              className="border-2 border-canvas-white-60% mr-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PrimaryBtn label="Join" onClick={handleSubscribe} />
          </div>
        </div>
      </Container>

      {/* Subscription Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="font-display">Welcome to The Newsletter</Modal.Title>
        </Modal.Header>
        <Modal.Body className="font-body">
          Your email, <span className="fw-bold">{subscribedEmail}</span> has been successfully
          subscribed to our weekly newsletter.
        </Modal.Body>
        <Modal.Footer>
          <PrimaryBtn label="Done" onClick={() => setShowModal(false)} />
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Footer;
