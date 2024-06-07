// Admin Dashboard Page

// Import css
import SecondaryBtn from "../buttons/SecondaryBtn";

function BookedTicket() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center my-3 py-3 px-4 bg-canvas-white-40% shadow rounded-3xl">
        <div className="flex-1 md:flex-grow">
          <h4 className="font-body text-lg truncate">Event Name</h4>
          <p className="font-body text-sm">Location: Location</p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="text-center">
            <p className="font-body text-sm">Date: Start Date</p>
            <p className="font-body text-sm">Time: 1 - 2</p>
          </div>
          <div className="mt-2">
            <p className="font-body">RPrice</p>
          </div>
          <SecondaryBtn label="Cancel" />
        </div>
      </div>
    </div>
  );
}

export default BookedTicket;
