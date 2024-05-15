// Added to Cart

// Import css
import SecondaryBtn from '../buttons/SecondaryBtn';
import { Form } from 'react-bootstrap';

function AddedCard() {
    return (
        <div>
            <div className="card-rectangle">
                <div className="row">
                    <div className="col-2">
                        <h4 className="font-body">Event Name</h4>
                    </div>
                    <div className="col-2">
                        <p style={{ marginTop: '-11px', fontSize: '19px' }}>Location: </p>
                        <p style={{ marginTop: '-20px' }}>Centurion</p>
                    </div>
                    <div className="col-2">
                        <p style={{ marginTop: '-11px', fontSize: '19px' }}>Date: </p>
                        <p style={{ marginTop: '-20px' }}>00/00/0000</p>
                    </div>
                    <div className="col-2">
                        <p style={{ marginTop: '-11px', fontSize: '19px' }}>Seats: </p>
                        <p style={{ marginTop: '-20px' }}>Seat Number/s</p>
                    </div>
                    <div className="col-2">
                        <p style={{ marginTop: '-11px', fontSize: '19px' }}>Cost: </p>
                        <p style={{ marginTop: '-20px' }}>R000.00</p>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-3" style={{ marginLeft: '1000px', marginTop: '-61px' }}>
                        <div className="row">
                            <Form.Select 
                                id="inputQuantity"
                                className="bg-transparent hover:bg-scarlet-melody-20% border-2 border-scarlet-melody-BASE rounded-full px-4 font-body text-scarlet-melody-BASE"
                                aria-label="Default select example" 
                                style={{ width: '70px'}}
                            >
                                <option disabled>Select Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2 </option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </Form.Select>
                            <div className="col-6 btns" style={{ marginLeft: '15px' }}>
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
