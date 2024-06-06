// Added to Cart

// Import css
import SecondaryBtn from "../buttons/SecondaryBtn";
import { Form } from "react-bootstrap";

function CartCard() {
  return (
    <div>
      <div className="flex items-center my-3">
        <div className="row">
          <div className="col-2">
            <h4 className="font-body mt-1">Event Name</h4>
          </div>
          <div className="col-2">
            <p className="font-body mt-2">Location: Centurion</p>
          </div>
          <div className="col-2">
            <p className="font-body mt-2">Date: 00/00/0000</p>
          </div>
          <div className="col-2">
            <p className="font-body mt-2">Time: 00:00 - 00:00</p>
          </div>
          <div className="col-2">
            <p className="font-body mt-2">Cost: R000.00</p>
          </div>
          <div className="col-1"></div>
          <div className="col-3" style={{ marginLeft: "1040px", marginTop: "-50px" }}>
            <div className="row">
              <div className="col-6 btns" style={{ marginLeft: "15px" }}>
                <SecondaryBtn label="Remove" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
