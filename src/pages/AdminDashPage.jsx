// Admin Dashboard Page

import "../styles/pendingEventCard.css"
// Import
import NavigationBar from "../components/NavigationBar";
import AdminNav from "../components/AdminNavbar"
import PendingEventPage from "../components/cards/PendingEventCards"

function AdminDashPage() {
  return (
    <div>
      <NavigationBar />
      <AdminNav />

      <div className="container">
        <h1 className="font-display mt-3">Admin Dashboard</h1>

        {/* Cards Display */}
        <div>
          <PendingEventPage />
        </div>
      </div>

      
    </div> 
  );
}

export default AdminDashPage;
