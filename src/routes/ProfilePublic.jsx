import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";

const mockProfiles = {
  "russell-fitzgerald": {
    name: "Russell Fitzgerald",
    headline: "The Taft School Class of 2025, Princeton University Class of 2029",
    location: "Philadelphia, Pennsylvania",
    profilePic: "https://via.placeholder.com/120",
    interests: ["Finance", "Mentorship", "Media"],
    education: ["The Taft School (2022–2025)", "William Penn Charter School (2021–2022)"],
    videoURL: localStorage.getItem("videoBioURL") || null
  },
  "casey-johnson": {
    name: "Casey Johnson",
    headline: "Princeton University Class of 2026",
    location: "New York, NY",
    profilePic: "https://via.placeholder.com/120",
    interests: ["Finance", "Startups"],
    education: ["Princeton University (2022–2026)"],
    videoURL: null
  }
};

export default function ProfilePublic() {
  const { username } = useParams();
  const user = mockProfiles[username];

  if (!user) {
    return (
      <div className="public-profile-wrapper">
        <h2>User Not Found</h2>
      </div>
    );
  }

  return (
    <div className="public-profile-wrapper">
      <div className="profile-left">
        <div className="profile-banner" />
        <div className="profile-header">
          <img src={user.profilePic} alt="Profile" className="profile-pic" />
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>{user.headline}</p>
            <p>{user.location}</p>
          </div>
        </div>

        {user.videoURL && (
          <div className="video-bio-section">
            <h4>🎥 My Video Bio</h4>
            <video src={user.videoURL} controls className="video-preview" />
          </div>
        )}

        <div className="profile-section">
          <h2>Education</h2>
          <ul>
            {user.education.map((school, i) => (
              <li key={i}><strong>{school}</strong></li>
            ))}
          </ul>
        </div>

        <div className="profile-section">
          <h2>Skills & Interests</h2>
          <p>{user.interests.join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}
