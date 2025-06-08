import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing.jsx";
import Register from "./routes/Register.jsx";
import RegisterEmail from "./routes/RegisterEmail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/email" element={<RegisterEmail />} />
      </Routes>
    </Router>
  );
}
