import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Quiz.css";

export default function QuizReview() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers, role } = location.state || { answers: [], role: "mentee" };

  const handleEdit = (index) => {
    const path = role === "mentor" ? "/quiz/mentor" : "/quiz/mentee";
    navigate(path, { state: { fromReview: true, editIndex: index, answers, role } });
  };

  const handleSubmit = () => {
    // Submit to backend or store in global state here
    navigate("/dashboard");
  };

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>Review Your Answers</h2>
        <ul className="review-list">
          {answers.map((ans, i) => (
            <li key={i}>
              <strong>Q{i + 1}:</strong> {ans}
              <button onClick={() => handleEdit(i)}>Edit</button>
            </li>
          ))}
        </ul>
        <button className="submit-btn" onClick={handleSubmit}>Confirm & Go to Dashboard</button>
      </div>
    </div>
  );
}
