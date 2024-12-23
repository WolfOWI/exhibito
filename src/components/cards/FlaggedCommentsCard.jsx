// FlaggedCommentsCard

// Import css
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

function FlaggedCommentCard(props) {
  return (
    <div className="card-rectangle lg:flex justify-between items-start">
      <div className="lg:w-[50%]">
        <p className="font-body">{props.text}</p>
        <p className="font-body hidden lg:block">By {props.username}</p>
        <div className="flex lg:hidden">
          <p className="font-body">By {props.username}</p>
          <div className="w-4"></div>
          <p className="font-body">{props.createdTime}</p>
          <div className="w-4"></div>
          <p className="font-body">{props.createdDate}</p>
        </div>
      </div>
      <div className="hidden lg:block">
        <p className="font-body">{props.createdTime}</p>
        <div className="w-4"></div>
        <p className="font-body">{props.createdDate}</p>
      </div>
      <div className="hidden lg:block">
        <p className="font-body ">Listed under</p>
        <p className="font-body">{props.eventName}</p>
      </div>
      <div className="flex">
        <PrimaryBtn label="Safe" onClick={props.onUnflag} />
        <div className="w-2">{/* Spacer */}</div>
        <SecondaryBtn label="Delete" onClick={props.onDelete} />
      </div>
    </div>
  );
}

export default FlaggedCommentCard;
