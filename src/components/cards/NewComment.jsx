// Comment Card - Event Info
import { Form } from "react-bootstrap";
// Import css
import PrimaryBtn from "../buttons/PrimaryBtn";

function NewComment({ onPostClick, newComment, setNewComment }) {

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.id]: e.target.value,
    });
  };

  const handlePostReviewBtnClick = () => {
    onPostClick();
  }

  return (
    <Form>
        <div className="row flex items-end">
          <div className="col-10">
          <Form.Label className="font-body">Leave a Comment</Form.Label>
            <Form.Control
              type="text"
              id="text"
              value= {newComment.text}
              onChange= {handleChange}
              className="border-2 border-canvas-white-60% h-32"
            />
          </div>
          <div className="col-2">
            <PrimaryBtn label="Post Review" onClick={handlePostReviewBtnClick}/>
          </div>
        </div>
    </Form>

  );
}

export default NewComment;
