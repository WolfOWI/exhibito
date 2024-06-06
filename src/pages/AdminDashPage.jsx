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
      <div className="container mt-4">
        <h1 className="font-display">Admin Dashboard</h1>
      </div>
      <Routes>
        <Route index element={<PendingEventPage />} />
        <Route path="events" element={<PendingEventPage />} />
        <Route path="comments" element={<FlaggedCommentPage />} />
      </Routes>
    </div> 
  );
}

export default AdminDashPage;
