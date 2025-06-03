import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";
import QuizMentor from "./routes/QuizMentor.jsx";
import QuizMentee from "./routes/QuizMentee.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ChatRoom from "./routes/ChatRoom.jsx";
import CalendarPage from "./routes/CalendarPage.jsx";
import Landing from "./routes/Landing.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/mentor" element={<QuizMentor />} />
        <Route path="/quiz/mentee" element={<QuizMentee />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:matchId" element={<ChatRoom />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}
