// Import react bootstrap components
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Import Custom Components
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

function AddEventModalB({ show, onHide, onBackClick, onSubmitClick, newEvent, setNewEvent }) {
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
          <SecondaryBtn label="Back" className="mr-12" onClick={onBackClick} />
          <Modal.Title className="font-display fs-1">New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE">
          <p className="mt-[-32px]">
            Please enter the dates, times, the cost of a ticket, how many seats are available, and
            upload a thumbnail of the event.
          </p>
          <Form className="font-body">
            {/* Dates */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  value={newEvent.startDate}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  value={newEvent.endDate}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Times */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="time"
                  id="startTime"
                  value={newEvent.startTime}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="time"
                  id="endTime"
                  value={newEvent.endTime}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Price & Seats */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label>Ticket Price (R)</Form.Label>
                <Form.Control
                  type="number"
                  id="ticketPrice"
                  value={newEvent.ticketPrice}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label>Maximum Seats</Form.Label>
                <Form.Control
                  type="number"
                  id="maxSeats"
                  value={newEvent.maxSeats}
                  onChange={handleChange}
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Upload Thumbnail */}
            <Form.Label>Thumbnail URL</Form.Label>
            <Form.Control
              type="text"
              id="thumbnail"
              value={newEvent.thumbnail}
              onChange={handleChange}
              className="border-2 border-canvas-white-60%"
            />
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <div className="flex w-full">
            <PrimaryBtn
              label="Submit"
              className="w-full"
              onClick={() => {
                onSubmitClick();
                onHide();
              }}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalB;
