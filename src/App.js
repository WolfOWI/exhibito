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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/eventinfo" element={<EventInfoPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/admin" element={<AdminDashPage />} />
      </Routes>
    </Router>
  );
}

export default App;
