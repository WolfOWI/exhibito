// Admin Dashboard Page

// Import css
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

function FlaggedCommentCard() {
  return (
    <div className="card-rectangle lg:flex justify-between items-start">
      <h4 className="font-body">Comment ID</h4>
      <p className="font-body">Event Name</p>
      <p className="font-body lg:w-[30%]">
        Comment Text comment text comment text comment text comment text comment text
      </p>
      <p className="font-body">By Username</p>
      <div className="flex">
        <PrimaryBtn label="Safe" />
        <div className="w-2">{/* Spacer */}</div>
        <SecondaryBtn label="Delete" />
      </div>
    </div>
  );
}

export default FlaggedCommentCard;
