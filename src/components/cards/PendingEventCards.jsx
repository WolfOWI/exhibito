// Admin Dashboard Page

// Import css
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn';

function PendingEventPage() {
  return (
    <div>
        <div className="card-rectangle">
            <div className="row">
                 <div className="col-2">
                    <h4 className="font-body mt-1">Event Name</h4>
                 </div>
                 <div className="col-2">
                    <p  className="font-body mt-2">Location: Centurion</p>
                </div>
                 <div className="col-2">
                    <p className="font-body mt-2">Date: 00/00/0000</p>
                </div>
                 <div className="col-2">
                    <p className="font-body mt-2">Submitted: Username</p>
                </div>
                 <div className="col-1"></div>
                 <div className="col-3">
                    <div className="row">
                        <div className="col-6 btns">
                            <PrimaryBtn label="Add Event" />
                        </div>
                        <div className="col-6 btns">
                            <SecondaryBtn label="Decline" />
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div> 
  );
}

export default PendingEventPage;
