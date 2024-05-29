// Comment Card - Event Info
import { Form } from "react-bootstrap";
// Import css
import PrimaryBtn from "../buttons/PrimaryBtn";

function NewComment() {
  return (
    <Form>
        <div className="row flex items-end">
          <div className="col-10">
          <Form.Label className="font-body">Leave a Comment</Form.Label>
            <Form.Control
              type="text"
              id="title"
              value= ""
              onChange= ""
              className="border-2 border-canvas-white-60% h-32"
            />
          </div>
          <div className="col-2">
            <PrimaryBtn label="Post Review" />
          </div>
        </div>
    </Form>

  );
}

export default NewComment;
