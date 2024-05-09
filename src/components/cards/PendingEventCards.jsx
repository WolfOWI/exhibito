// Admin Dashboard Page

// Import css
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn';

function PendingEventPage() {
  return (
    <div>
        <h3 className="font-body mt-4">Pending Event Submissions</h3>
        <p className="font-body">Below are the events awaiting your review. You can decide whether to approve or reject each event submission.</p>
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
                 <div className="col-1"></div>
                 <div className="col-3">
                    <div className="row">
                        <div className="col-6">
                            <PrimaryBtn label="Add Event" />
                        </div>
                        <div className="col-6">
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
