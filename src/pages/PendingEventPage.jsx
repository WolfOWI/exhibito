// Admin Dashboard Page

// Import css
import PendingEventCards from "../components/cards/PendingEventCards";

function PendingEventPage() {
  return (
    <div>
      <h3 className="font-body mt-4">Pending Event Submissions</h3>
      <p className="font-body">
        Below are the events awaiting your review. You can decide whether to approve or reject each
        event submission.
      </p>
      <PendingEventCards />
    </div>
  );
}

export default PendingEventPage;
