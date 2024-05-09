// Import react bootstrap components
import Modal from "react-bootstrap/Modal";

// Import Custom Components
import PrimaryBtn from "./buttons/PrimaryBtn";
import SecondaryBtn from "./buttons/SecondaryBtn";

function AddEventModalA(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton className="bg-canvas-white-BASE border-none">
          <Modal.Title className="font-display fs-1">Add Event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-canvas-white-BASE">
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur
            enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam
            adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo
            magni incidunt dolore amet atque facilis ipsum deleniti rem!
          </p>
        </Modal.Body>
        <Modal.Footer className="bg-canvas-white-BASE border-none">
          <div className="flex w-full bg-slate-500">
            <PrimaryBtn label="Next" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEventModalA;
