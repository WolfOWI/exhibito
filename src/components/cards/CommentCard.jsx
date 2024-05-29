// Comment Card - Event Info

// Import css
import PrimaryBtn from "../buttons/PrimaryBtn";

function CommentsCard() {
  return (
    <div>
        <div className="rectangle">
            <div className="top-section flex items-center justify-between pt-1 px-3 font-body text-ink-silhouette-BASE">
                <div>Username</div>
                <div className="flex items-center space-x-3">
                    <div>00/00/0000</div>
                    <div className="text-ink-silhouette-40%">21:47</div>
                    <div className="mx-2">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-ink-silhouette-70% hover:fill-scarlet-melody-BASE">
                            <path d="M280-400v240q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-600q0-17 11.5-28.5T240-800h287q14 0 25 9t14 23l10 48h184q17 0 28.5 11.5T800-680v320q0 17-11.5 28.5T760-320H553q-14 0-25-9t-14-23l-10-48H280Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <p className="pt-2 px-3">I love the vibrant energy of this piece. It's so dynamic and alive.</p>
            <div className="flex justify-end pt-2">
                <PrimaryBtn label="Post" className="mx-3 mb-3"/>
            </div>
        </div>
    </div>

  );
}

export default CommentsCard;
