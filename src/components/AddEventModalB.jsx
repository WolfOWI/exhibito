import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

function AddEventModalB({ show, onHide, onBackClick, onSubmitClick, newEvent, setNewEvent }) {
  const [validated, setValidated] = useState(false);
  const [allInfoEntered, setAllInfoEntered] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(true);
      onSubmitClick(); // Call the submit function directly
      setShowConfirmationModal(true); // Show confirmation modal
    }
  };

  const handleClose = () => {
    if (allInfoEntered) {
      onHide();
    }
  };

  const handleConfirmationModalClose = () => {
    setShowConfirmationModal(false);
    onHide(); // Hide the AddEventModalB when confirmation modal closes
  };

  return (
    <>
      <Modal
        show={show && !showConfirmationModal}
        onHide={onHide}
        onExited={() => setAllInfoEntered(false)}
      >
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <SecondaryBtn label="Back" className="mr-12" onClick={onBackClick} />
          <Modal.Title className="font-display fs-1">New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE">
          <p className="mt-[-32px]">
            Please enter the dates, times, the cost of a ticket, how many seats are available, and
            upload a thumbnail of the event.
          </p>
          <Form className="font-body" noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Dates */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  value={newEvent.startDate}
                  onChange={handleChange}
                  required
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a start date.
                </Form.Control.Feedback>
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  required
                  value={newEvent.endDate}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an end date.
                </Form.Control.Feedback>
              </div>
            </div>
            {/* Times */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  id="startTime"
                  required
                  value={newEvent.startTime}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a start time.
                </Form.Control.Feedback>
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="time"
                  id="endTime"
                  required
                  value={newEvent.endTime}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide an end time.
                </Form.Control.Feedback>
              </div>
            </div>
            {/* Price & Seats */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Ticket Price (R)</Form.Label>
                <Form.Control
                  type="number"
                  id="ticketPrice"
                  required
                  value={newEvent.ticketPrice}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a ticket price.
                </Form.Control.Feedback>
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>Maximum Seats</Form.Label>
                <Form.Control
                  type="number"
                  id="maxSeats"
                  required
                  value={newEvent.maxSeats}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
                <Form.Control.Feedback type="invalid">
                  Please provide the maximum number of seats.
                </Form.Control.Feedback>
              </div>
            </div>
            {/* Upload Thumbnail */}
            <Form.Label>Thumbnail URL</Form.Label>
            <Form.Control
              type="text"
              id="thumbnail"
              value={newEvent.thumbnail}
              onChange={handleChange}
              required
              className="border-2 border-canvas-white-60%"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a thumbnail URL.
            </Form.Control.Feedback>
            <PrimaryBtn label="Submit" className="w-full mt-4" type="submit" />
          </Form>
        </Modal.Body>
      </Modal>

      {/* Confirmation Modal */}
      <Modal show={showConfirmationModal} onHide={handleConfirmationModalClose}>
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <Modal.Title>Event Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE border-none">
          Your event has been successfully submitted.
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <PrimaryBtn label="Close" onClick={handleConfirmationModalClose} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalB;
