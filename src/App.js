import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import UpcomingPage from "./pages/UpcomingPage";
import EventInfoPage from "./pages/EventInfoPage";
import UserProfilePage from "./pages/UserProfilePage";
import TicketsPage from "./pages/TicketsPage";
import AdminDashPage from "./pages/AdminDashPage";
import PendingEventPage from "./pages/PendingEventPage";
import FlaggedCommentPage from "./pages/FlaggedCommentPage";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login & Sign up */}
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Public Routes - Everyone can access (if logged in) */}
        <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/upcoming" element={<ProtectedRoute element={<UpcomingPage />} />} />
        <Route
          path="/eventinfo/:eventId"
          element={<ProtectedRoute element={<EventInfoPage />} />}
        />
        <Route path="/profile" element={<ProtectedRoute element={<UserProfilePage />} />} />
        <Route path="/tickets" element={<ProtectedRoute element={<TicketsPage />} />} />

        {/* Private Routes - Reserved for admin */}
        <Route
          path="/admin/*"
          element={<PrivateRoute element={<AdminDashPage />} allowedRoles={["admin"]} />}
        />
        <Route
          path="/admin/events"
          element={<PrivateRoute element={<PendingEventPage />} allowedRoles={["admin"]} />}
        />
        <Route
          path="/admin/comments"
          element={<PrivateRoute element={<FlaggedCommentPage />} allowedRoles={["admin"]} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
