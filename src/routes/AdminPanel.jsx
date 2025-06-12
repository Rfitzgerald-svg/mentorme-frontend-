import React, { useState } from "react";
import "./AdminPanel.css";

const mockUsers = [
  { name: "Russell F.", role: "Student", lastLogin: "Today", status: "Matched" },
  { name: "Joey C.", role: "Student", lastLogin: "Yesterday", status: "Quiz Complete" },
  { name: "Alex J.", role: "Mentor", lastLogin: "3 days ago", status: "Active Mentor" },
  { name: "Sophie L.", role: "Student", lastLogin: "Today", status: "Matched" },
  { name: "Daniel K.", role: "Mentor", lastLogin: "5 days ago", status: "Pending Approval" }
];

export default function AdminPanel() {
  const [filter, setFilter] = useState("All");

  const filteredUsers = mockUsers.filter(user =>
    filter === "All" ? true : user.role === filter
  );

  return (
    <main className="admin-main">
      <h1>Admin Panel</h1>
      <div className="filter-buttons">
        {["All", "Student", "Mentor"].map(role => (
          <button
            key={role}
            onClick={() => setFilter(role)}
            className={filter === role ? "active" : ""}
          >
            {role}s
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Last Login</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.lastLogin}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
