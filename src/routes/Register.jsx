import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !role) {
      alert("Please fill out all fields.");
      return;
    }

    console.log({ name, email, role });
    alert(`Welcome ${name}, registered as a ${role}.`);
    if (role === "mentee") navigate("/quiz/mentee");
    else navigate("/quiz/mentor");
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow rounded-xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Register for MentorMe</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setRole("mentee")}
            className={`px-4 py-2 rounded ${
              role === "mentee" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            I'm a Mentee
          </button>
          <button
            type="button"
            onClick={() => setRole("mentor")}
            className={`px-4 py-2 rounded ${
              role === "mentor" ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
          >
            I'm a Mentor
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
