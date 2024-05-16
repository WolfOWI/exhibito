// Admin Dashboard Page

// Import css
import PrimaryBtn from '../buttons/PrimaryBtn'
import SecondaryBtn from '../buttons/SecondaryBtn';

function FlaggedCommentCard() {
  return (
    <div>
        <div className="card-rectangle align-items-center">
            <div className="row">
                 <div className="col-2 mt-1">
                    <h5 className="font-body">Comment ID: 001</h5>
                 </div>
                 <div className="col-2  mt-2">
                    <p  className="font-body">Event Name: Name</p>
                </div>
                 <div className="col-3  mt-2">
                    <p  className="font-body">Comment Text: Comment Text</p>
                </div>
                 <div className="col-2 mt-2">
                    <p  className="font-body">Flagged By: Username</p>
                </div>
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

export default FlaggedCommentCard;
