// Event Card (Upcoming Exhibitions Page)

// Import Bootstrap React Components
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

// Import Functions
import { eventCardDateFormat } from "../../services/datesFunctions";

function EventCard(props) {
  return (
    <Card className="cursor-pointer group p-3 border-none bg-transparent hover:bg-canvas-white-20% rounded-[40px]">
      {/* Multi Line truncation for description */}
      <style>
        {`
          .multi-line-truncation {
            display: -webkit-box;
            -webkit-line-clamp: 2; /* Number of lines */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        `}
      </style>
      <Card.Img
        className="h-40 object-cover rounded-3xl rounded-bl-none border-4 border-sapphire-whisper-BASE group-hover:border-scarlet-melody-BASE"
        src={props.thumbnail}
      />
      <Card.Body>
        <Card.Title className="font-display fs-4 text-ink-silhouette-BASE group-hover:text-scarlet-melody-BASE truncate">
          {props.title}
        </Card.Title>
        <Card.Text className="font-body italic h-12 multi-line-truncation text-ink-silhouette-BASE">
          {props.desc}
        </Card.Text>
        <div className="w-full flex">
          {/* Price Badge */}
          <Badge
            bg=""
            className="bg-sapphire-whisper-60% group-hover:bg-scarlet-melody-BASE text-canvas-white-BASE font-body fs-6 font-normal rounded-full flex items-center w-fit mr-2"
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3F1EE"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-1-120q14 0 24.5-10.5T514-235v-15q50-9 86-39t36-89q0-42-24-77t-96-61q-60-20-83-35t-23-41q0-26 18.5-41t53.5-15q20 0 35 7t25 19q10 12 22.5 16.5t23.5-.5q15-6 20.5-20.5T606-653q-16-23-39.5-39T516-710v-15q0-14-10.5-24.5T481-760q-14 0-24.5 10.5T446-725v15q-50 11-78 44t-28 74q0 47 27.5 76t86.5 50q63 23 87.5 41t24.5 47q0 33-23.5 48.5T486-314q-26 0-47-12.5T404-364q-8-14-21-19t-26 0q-14 5-20.5 19t-.5 27q16 34 43 55.5t65 29.5v17q0 14 10.5 24.5T479-200Z" />
            </svg>
            {`R${props.ticketPrice}`}
          </Badge>
          {/* Seats Available Badge */}
          <Badge
            bg=""
            className="bg-sapphire-whisper-60% group-hover:bg-scarlet-melody-BASE text-canvas-white-BASE font-body fs-6 font-normal rounded-full flex items-center w-fit"
          >
            <svg
              className="mr-1"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#F3F1EE"
            >
              <path d="M200-120q-17 0-28.5-11.5T160-160v-40q-50 0-85-35t-35-85v-200q0-33 23.5-56.5T120-600q33 0 56.5 23.5T200-520v160h560v-160q0-33 23.5-56.5T840-600q33 0 56.5 23.5T920-520v200q0 50-35 85t-85 35v40q0 17-11.5 28.5T760-120q-17 0-28.5-11.5T720-160v-40H240v40q0 17-11.5 28.5T200-120Zm80-320v-80q0-55-33.5-98.5T160-680v-40q0-50 35-85t85-35h400q50 0 85 35t35 85v40q-54 14-87 58.5T680-520v80H280Z" />
            </svg>
            {`${props.avSeats}/${props.maxSeats}`}
          </Badge>
        </div>
        {/* Details of Event */}
        <div>
          {/* Time & Date */}
          <div className="flex mt-3 xl:flex-col">
            {/* Time Detail */}
            <div className="flex">
              <svg
                className="mr-1 group-hover:fill-scarlet-melody-BASE"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#84AFB5"
              >
                <path d="M520-496v-144q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640v159q0 8 3 15.5t9 13.5l132 132q11 11 28 11t28-11q11-11 11-28t-11-28L520-496ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
              </svg>
              <p className="font-body text-ink-silhouette-BASE">{`${props.startTime} - ${props.endTime}`}</p>
            </div>
            {/* Date Detail */}
            <div className="flex ml-4 xl:ml-0">
              <svg
                className="mr-1 group-hover:fill-scarlet-melody-BASE"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#84AFB5"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-40q0-17 11.5-28.5T280-880q17 0 28.5 11.5T320-840v40h320v-40q0-17 11.5-28.5T680-880q17 0 28.5 11.5T720-840v40h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm280-240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
              <p className="font-body text-ink-silhouette-BASE">
                {props.startDate && props.endDate
                  ? eventCardDateFormat(props.startDate, props.endDate)
                  : ""}
              </p>
            </div>
          </div>
          {/* Location Detail */}
          <div className="flex">
            <svg
              className="mr-1 group-hover:fill-scarlet-melody-BASE"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#84AFB5"
            >
              <path d="M480-107q-14 0-28-5t-25-15q-65-60-115-117t-83.5-110.5q-33.5-53.5-51-103T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 45-17.5 94.5t-51 103Q698-301 648-244T533-127q-11 10-25 15t-28 5Zm0-373q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z" />
            </svg>
            <p className="font-body text-ink-silhouette-BASE">{props.location}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
