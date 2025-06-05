import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";
import QuizMentor from "./routes/QuizMentor.jsx";
import QuizMentee from "./routes/QuizMentee.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import ChatRoom from "./routes/ChatRoom.jsx";
import CalendarPage from "./routes/CalendarPage.jsx";
import Landing from "./routes/Landing.jsx";
import MyNetwork from "./routes/MyNetwork.jsx";
import Bot from "./routes/Bot.jsx";
import ProTips from "./routes/ProTips.jsx";
import AdminPanel from "./routes/AdminPanel.jsx";

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
        <Route path="/network" element={<MyNetwork />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/protips" element={<ProTips />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/chat/:matchId" element={<ChatRoom />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}
