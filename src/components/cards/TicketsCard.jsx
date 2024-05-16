// Admin Dashboard Page

// Import css
import SecondaryBtn from '../buttons/SecondaryBtn';

function EventTicket() {
  return (
    <div>
        <div className="card-rectangle">
        <div className="row">
                 <div className="col-2">
                    <h4 className="font-body">Event Name</h4>
                 </div>
                 <div className="col-2">
                    <p>Location: Centurion</p>
                </div>
                 <div className="col-2">Date: 00/00/0000</div>
                 <div className="col-2">Submitted: Username</div>
                 <div className="col-2">Tickets Amount: 2</div>
                 <div className="col-2">
                    <SecondaryBtn label=" Event Info"/>
                 </div>
            </div>
        </div>
    </div> 
  );
}

export default EventTicket;
