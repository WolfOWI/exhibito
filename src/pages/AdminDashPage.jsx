// Admin Dashboard Page

import "../styles/pendingEventCard.css"
// Import
import NavigationBar from "../components/NavigationBar";
import AdminNav from "../components/AdminNavbar"
import PendingEventCard from "../components/cards/PendingEventCards"

function AdminDashPage() {
  return (
    <div>
      <NavigationBar />
      <AdminNav />

      <div className="container">
        <h1 className="font-display mt-3">Admin Dashboard</h1>
        <h3 className="font-body mt-4">Pending Event Submissions</h3>
        <p className="font-body">Below are the events awaiting your review. You can decide whether to approve or reject each event submission.</p>

        {/* Cards Display */}
        <div>
          <PendingEventCard />
          <PendingEventCard />
          <PendingEventCard />
        </div>
      </div>

      
    </div> 
  );
}

export default AdminDashPage;
