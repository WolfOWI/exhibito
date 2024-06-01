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

        {/* Protected Routes - Only logged-in users can access */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
          <Route path="/eventinfo/:eventId" element={<EventInfoPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/tickets" element={<TicketsPage />} />
        </Route>

        {/* Private Routes - Reserved for admin */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<AdminDashPage />}>
            <Route index element={<PendingEventPage />} />
            <Route path="events" element={<PendingEventPage />} />
            <Route path="comments" element={<FlaggedCommentPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
