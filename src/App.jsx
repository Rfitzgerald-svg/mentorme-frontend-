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
import MyNetwork from "./routes/MyNetwork.jsx";
import Bot from "./routes/Bot.jsx";
import ProTips from "./routes/ProTips.jsx";
import AdminPanel from "./routes/AdminPanel.jsx";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/mentor" element={<QuizMentor />} />
        <Route path="/quiz/mentee" element={<QuizMentee />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/network" element={<Layout><MyNetwork /></Layout>} />
        <Route path="/bot" element={<Layout><Bot /></Layout>} />
        <Route path="/protips" element={<Layout><ProTips /></Layout>} />
        <Route path="/admin" element={<Layout><AdminPanel /></Layout>} />
        <Route path="/chat/:matchId" element={<ChatRoom />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}
