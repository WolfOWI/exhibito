import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import PrimaryBtn from "./buttons/PrimaryBtn";

function AddEventModalA({ show, onHide, onNextClick, newEvent, setNewEvent }) {
  const [validated, setValidated] = useState(false);

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
    } else {
      onNextClick();
    }
    setValidated(true);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
        <Modal.Title className="font-display fs-1">New Event</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-canvas-white-BASE">
        <p className="mt-[-32px]">
          Please enter the name of the event, a description and where it will be held. Click
          'next' to proceed to the rest of the details.
        </p>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="title" className="mb-3">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              required
              value={newEvent.title}
              onChange={handleChange}
              className="border-2 border-canvas-white-60%"
            />
            <Form.Control.Feedback type="invalid">
              Please provide an event title.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="description" className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              required
              value={newEvent.description}
              onChange={handleChange}
              className="h-32 bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-32"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a description.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="location" className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              as="select"
              required
              value={newEvent.location}
              onChange={handleChange}
              className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
              aria-label="Default select example"
            >
              <option value="">Select Province</option>
              <option value="Gauteng">Gauteng</option>
              <option value="FreeState">Free State</option>
              <option value="KwaZulu-Natal">KwaZulu-Natal</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Western Cape">Western Cape</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="North West">North West</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Limpopo">Limpopo</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Please select a location.
            </Form.Control.Feedback>
          </Form.Group>
          <PrimaryBtn label="Next" className="w-full" type="submit" />
        </Form>
      </Modal.Body>
      <Modal.Footer className="bg-canvas-white-BASE border-none">
      </Modal.Footer>
    </Modal>
  );
}

export default AddEventModalA;
