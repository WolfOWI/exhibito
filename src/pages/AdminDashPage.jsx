// Admin Dashboard Page

import { Routes, Route } from "react-router-dom";

import "../styles/pendingEventCard.css";
// Import
import NavigationBar from "../components/NavigationBar";
import AdminNav from "../components/AdminNavbar";
import PendingEventPage from "../pages/PendingEventPage";
import FlaggedCommentPage from "../pages/FlaggedCommentPage";

function AdminDashPage() {
  return (
    <div>
      <NavigationBar />
      <AdminNav />
      <Routes>
        <Route index element={<PendingEventPage />} />
        <Route path="events" element={<PendingEventPage />} />
        <Route path="comments" element={<FlaggedCommentPage />} />
      </Routes>
    </div>
    // <div>

    //   <div className="container">
    //     <h1 className="font-display mt-3">Admin Dashboard</h1>

    //     {/* Cards Display */}
    //     <div>
    //       <PendingEventPage />
    //     </div>
    //   </div>
    // </div>
  );
}

export default AdminDashPage;
