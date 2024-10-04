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

  const handlePostReviewBtnClick = (e) => {
    e.preventDefault();
    onPostClick();
  };

  return (
    <Form className="flex flex-col items-start">
      <div className="flex flex-col items-end w-full md:w-fit">
        <div className="w-full md:min-w-[700px] max-w-[1000px]">
          <Form.Label className="font-body">Tell us about your experience.</Form.Label>
          <Form.Control
            type="text"
            id="text"
            value={newComment.text}
            onChange={handleChange}
            className="border-2 border-canvas-white-60% h-32"
          />
        </div>
        <PrimaryBtn
          className="w-full mt-2 md:mt-0 md:w-fit"
          label="Post Review"
          onClick={(e) => handlePostReviewBtnClick(e)}
        />
      </div>
    </Form>
  );
}

export default NewComment;
