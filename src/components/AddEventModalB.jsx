// Import react bootstrap components
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Import Custom Components
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

function AddEventModalB(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <SecondaryBtn label="Back" className="mr-12" onClick={props.onBackBtnClick} />
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
                <Form.Label htmlFor="startDate">Start Date</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label htmlFor="endDate">End Date</Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Times */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label htmlFor="startTime">Start Time</Form.Label>
                <Form.Control
                  type="time"
                  id="startTime"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label htmlFor="endTime">End Time</Form.Label>
                <Form.Control
                  type="time"
                  id="endTime"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Price & Seats */}
            <div className="flex mb-3">
              <div className="w-full">
                <Form.Label htmlFor="ticketPrice">Ticket Price (R)</Form.Label>
                <Form.Control
                  type="number"
                  id="ticketPrice"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
              <div className="w-6">{/* Spacer */}</div>
              <div className="w-full">
                <Form.Label htmlFor="maxSeats">Maximum Seats</Form.Label>
                <Form.Control
                  type="number"
                  id="maxSeats"
                  className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
                />
              </div>
            </div>
            {/* Upload Thumbnail */}
            <Form.Group controlId="formFile">
              <Form.Label htmlFor="inputMinPrice">Upload Thumbnail</Form.Label>
              <div className="relative bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-2xl border-dashed cursor-pointer">
                <input
                  className="opacity-0 w-full h-full border-none p-4 cursor-pointer"
                  type="file"
                  id="hiddenFileInput"
                  accept="image/*"
                />
                <svg
                  className="w-12 absolute top-[20%] right-[45%]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="#6E6A63"
                >
                  <path d="M240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Zm200-486-75 75q-12 12-28.5 11.5T308-572q-11-12-11.5-28t11.5-28l144-144q6-6 13-8.5t15-2.5q8 0 15 2.5t13 8.5l144 144q12 12 11.5 28T652-572q-12 12-28.5 12.5T595-571l-75-75v286q0 17-11.5 28.5T480-320q-17 0-28.5-11.5T440-360v-286Z" />
                </svg>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <div className="flex w-full">
            <PrimaryBtn label="Submit" className="w-full" onClick={props.onHide} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalB;
