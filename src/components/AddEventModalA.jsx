// Import react bootstrap components
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// Import Custom Components
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

function AddEventModalA(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <Modal.Title className="font-display fs-1">New Event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE">
          <p className="mt-[-32px]">
            Please enter the name of the event, a description and where it will be held. Click
            'next' to proceed to the rest of the details.
          </p>
          <Form className="font-body">
            <Form.Label htmlFor="inputMinPrice">Event Title</Form.Label>
            <Form.Control
              type="text"
              id="inputMinPrice"
              className="border-2 border-canvas-white-60%"
            />
            <Form.Label className="mt-3" htmlFor="inputMinPrice">
              Description
            </Form.Label>
            <Form.Control
              type="text"
              id="inputMinPrice"
              className="border-2 border-canvas-white-60% h-32"
            />
            <Form.Label className="mt-3" htmlFor="inputMinPrice">
              Location
            </Form.Label>
            <Form.Select
              className="bg-canvas-white-BASE border-2 border-canvas-white-60% rounded-full"
              aria-label="Default select example"
            >
              <option disabled>Select Province</option>
              <option value="Gauteng">Gauteng</option>
              <option value="FreeState">Free State</option>
              <option value="KwazuluNatal">KwaZulu-Natal</option>
              <option value="EasternCape">Eastern Cape</option>
              <option value="WesternCape">Western Cape</option>
              <option value="NorthernCape">Northern Cape</option>
              <option value="NorthWest">North West</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Limpopo">Limpopo</option>
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <div className="flex w-full">
            <PrimaryBtn label="Next" className="w-full" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalA;
