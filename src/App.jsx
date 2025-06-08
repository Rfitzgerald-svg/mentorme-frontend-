import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./routes/Landing.jsx";
import RegisterEmail from "./routes/RegisterEmail.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register/email" element={<RegisterEmail />} />
      </Routes>
    </Router>
  );
}
