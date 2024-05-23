// Import react bootstrap components
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Import Custom Components
import PrimaryBtn from "./buttons/PrimaryBtn";

function AddEventModalA({ show, onHide, onNextClick, newEvent, setNewEvent }) {
  // When input field changes, update the newEvent state (on navbar)
  const handleChange = (e) => {
    setNewEvent({
      ...newEvent,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <Modal.Title className="font-display fs-1">New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE">
          <p className="mt-[-32px]">
            Please enter the name of the event, a description and where it will be held. Click
            'next' to proceed to the rest of the details.
          </p>
          <Form className="font-body">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              id="title"
              value={newEvent.title}
              onChange={handleChange}
              className="border-2 border-canvas-white-60%"
            />
            <Form.Label className="mt-3">Description</Form.Label>
            <Form.Control
              type="text"
              id="description"
              value={newEvent.description}
              onChange={handleChange}
              className="border-2 border-canvas-white-60% h-32"
            />
            <Form.Label className="mt-3">Location</Form.Label>
            <Form.Control
              as="select"
              id="location"
              value={newEvent.location}
              onChange={handleChange}
              className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
              aria-label="Default select example"
            >
              <option disabled>Select Province</option>
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
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <div className="flex w-full">
            <PrimaryBtn label="Next" className="w-full" onClick={onNextClick} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalA;
