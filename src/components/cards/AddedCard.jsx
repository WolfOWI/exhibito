// Added to Cart

// Import css
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn';

function AddedCard() {
  return (
    <div>
        <div className="card-rectangle">
            <div className="row">
                 <div className="col-2">
                    <h4 className="font-body">Event Name</h4>
                 </div>
                 <div className="col-2">
                    <p style={{marginTop: '-11px', fontSize: '19px'}}>Location: </p>
                    <p style={{marginTop: '-20px'}}>Centurion</p>
                </div>
                <div className="col-2">
                    <p style={{marginTop: '-11px', fontSize: '19px'}}>Date: </p>
                    <p style={{marginTop: '-20px'}}>00/00/0000</p>
                </div>
                <div className="col-2">
                    <p style={{marginTop: '-11px', fontSize: '19px'}}>Seats: </p>
                    <p style={{marginTop: '-20px'}}>Seat Number/s</p>
                </div>
                <div className="col-2">
                    <p style={{marginTop: '-11px', fontSize: '19px'}}>Cost: </p>
                    <p style={{marginTop: '-20px'}}>R000.00</p>
                </div>
                 <div className="col-1"></div>
                 <div className="col-3" style={{marginLeft: '1000px', marginTop: '-61px'}}>
                    <div className="row">
                        <div className="col-6 btns">
                            <SecondaryBtn label="1 v" />
                        </div>
                        <div className="col-6 btns" style={{marginLeft: '-70px'}}>
                            <SecondaryBtn label="Remove" />
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div> 
  );
}

export default AddedCard;
