// Added to Cart

// Import css
import SecondaryBtn from "../buttons/SecondaryBtn";

function CartCard() {
  return (
    <div>
      <div className="flex justify-between items-center my-3  h-20">
        <div>
          <h4 className="font-body">Event Name</h4>
          <p className="font-body h-2">Location: Centurion</p>
        </div>
        <div className="hidden md:block">
          <p className="font-body h-2">Date: 00/00/0000</p>
          <p className="font-body h-2">Time: 00:00 - 00:00</p>
        </div>
        <div className="flex items-center">
          <p className="font-body h-2 mr-5">R00.00</p>
          <SecondaryBtn label="Remove" />
        </div>
      </div>
    </div>
  );
}

export default CartCard;
