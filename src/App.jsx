import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./routes/Register";
import Login from "./routes/Login";
import QuizMentor from "./routes/QuizMentor";
import QuizMentee from "./routes/QuizMentee";
import Dashboard from "./routes/Dashboard";
import ChatRoom from "./routes/ChatRoom";
import CalendarPage from "./routes/CalendarPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
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
