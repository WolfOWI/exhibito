import "./App.css";

// Import React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/eventinfo/:eventId" element={<EventInfoPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/admin/*" element={<AdminDashPage />}>
          <Route index element={<PendingEventPage />} />
          <Route path="events" element={<PendingEventPage />} />
          <Route path="comments" element={<FlaggedCommentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
