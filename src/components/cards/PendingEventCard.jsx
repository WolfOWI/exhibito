// Admin Dashboard Page
// Import React hooks
import { useState, useEffect } from "react";

// Import functions
import { getHouseById } from "../../services/getExhibitoData";

// Import custom components
import PrimaryBtn from "../buttons/PrimaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

function PendingEventCard(props) {
  const [artHouse, setArtHouse] = useState(null);
  useEffect(() => {
    getHouseById(props.artHouseId).then((houseData) => {
      setArtHouse(houseData);
    });
  });

  return (
    <div className="card-rectangle lg:flex justify-between items-start">
      <div className="sm:w-full lg:w-[30%]">
        <h4 className="font-body">{props.title}</h4>
        <p className="font-body">{props.desc}</p>
        <p className="font-body">Arthouse: {artHouse && artHouse.name}</p>
      </div>
      <div className="sm:flex lg:block sm:w-full lg:w-fit justify-between">
        <p className="font-body">{`${props.startTime} - ${props.endTime}`}</p>
        <p className="font-body">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="font-body">Location: {props.location}</p>
      </div>
      <div className="sm:flex lg:block sm:w-full lg:w-fit justify-between">
        <p className="font-body">Seats: {props.maxSeats}</p>
        <p className="font-body">{`R${props.ticketPrice}`} per person</p>
      </div>

      <div className="sm:flex lg:block">
        <PrimaryBtn label="Approve" onClick={props.onApprove} />
        <div className="w-2 h-2">{/* Spacer */}</div>
        <SecondaryBtn label="Decline" />
      </div>
    </div>
  );
}

export default PendingEventCard;
