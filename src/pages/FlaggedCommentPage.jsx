// Admin Dashboard Page

// Import css
import FlaggedCommentCard from "../components/cards/FlaggedCommentsCard";

function FlaggedCommentPage() {
  return (
    <div className="container">
      <h3 className="font-body mt-4">Flagged Comments</h3>
      <p className="font-body">
        Below are the comments that have been flagged by users. Review each comment and take
        appropriate action as needed.
      </p>
      <FlaggedCommentCard />
      <FlaggedCommentCard />
    </div>
  );
}

export default FlaggedCommentPage;
