// Admin Dashboard Page

// Import css
import SecondaryBtn from '../buttons/SecondaryBtn';

function EventTicket() {
  return (
    <div>
        <div className="card-rectangle">
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
                    <p className="font-body mt-2">Submitted: Username</p>
                </div>
                 <div className="col-2">
                    <p className="font-body mt-2">Tickets Amount: 2</p>
                </div>
                 <div className="col-2">
                    <SecondaryBtn label=" Event Info"/>
                 </div>
            </div>
        </div>
    </div> 
  );
}

export default EventTicket;
