import React, { useState } from "react";
import "./MyNetwork.css";

const mockNodes = [
  {
    id: "1",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Finance and lacrosse. Searching for alumni in business."
  },
  {
    id: "2",
    name: "Alex Johnson",
    role: "Mentor at JPMorgan",
    type: "direct",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "VP at JPMorgan. Lacrosse captain. Mentor in finance.",
    mutuals: "Joaquin and 3 others"
  },
  {
    id: "3",
    name: "Sophie Lee",
    role: "Student at Taft",
    type: "recommended",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Club leader at Taft Women in Business. Finance track.",
    mutuals: "2 shared activities"
  },
  {
    id: "4",
    name: "Daniel Kim",
    role: "Alum at Choate",
    type: "cross",
    img: "https://randomuser.me/api/portraits/men/85.jpg",
    bio: "Stanford MBA in private equity. Choate → Business path.",
    mutuals: "Matched on 4 interests"
  },
  {
    id: "5",
    name: "Lena Hart",
    role: "Mentor at Meta",
    type: "direct",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Product manager at Meta. CS + design thinking.",
    mutuals: "Intro’d via alumni advisor"
  },
  {
    id: "6",
    name: "Jason Wu",
    role: "Student at Exeter",
    type: "cross",
    img: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "Startup club lead. Coding + pitching enthusiast.",
    mutuals: "4 quiz answers aligned"
  },
  {
    id: "7",
    name: "Maya Patel",
    role: "Student at Taft",
    type: "recommended",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
    bio: "STEM + dance. Looking to connect with women in tech.",
    mutuals: "3 quiz matches"
  },
  {
    id: "8",
    name: "Noah Brown",
    role: "Mentor at BCG",
    type: "direct",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bio: "Strategy consultant. Ivy grad. Loves mentoring.",
    mutuals: "Taft alum connection"
  },
  {
    id: "9",
    name: "Ella Zhang",
    role: "Alum at Andover",
    type: "cross",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Building in AI. Andover → MIT → YC startup.",
    mutuals: "Shared startup interest"
  },
  {
    id: "10",
    name: "Marcus Green",
    role: "Student at Taft",
    type: "recommended",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
    bio: "Wants to learn about investment banking.",
    mutuals: "Finance club + 2 mentors"
  }
];

export default function MyNetwork() {
  const [selectedId, setSelectedId] = useState("1");
  const [connections, setConnections] = useState({});

  const getStatus = (id) => connections[id] || "Connect";

  const handleConnect = (id) => {
    const current = connections[id];
    const next =
      current === "Connect"
        ? "Request Sent"
        : current === "Request Sent"
        ? "Connected"
        : "Connect";
    setConnections({ ...connections, [id]: next });
  };

  return (
    <div className="network-wrapper">
      <div className="network-left">
        <div className="profile-minis">
          {mockNodes.map((node) => (
            <div
              key={node.id}
              className={`mini-profile ${node.type} ${selectedId === node.id ? "selected" : ""}`}
              onClick={() => setSelectedId(node.id)}
            >
              <img src={node.img} alt={node.name} />
            </div>
          ))}
        </div>
        <div className="profile-expanded">
          {mockNodes
            .filter((node) => node.id === selectedId)
            .map((node) => (
              <div key={node.id} className="profile-card">
                <img src={node.img} alt={node.name} />
                <h2>{node.name}</h2>
                <p><strong>{node.role}</strong></p>
                <p>{node.bio}</p>
                <p className="mutuals">{node.mutuals}</p>
                <button
                  className={`connect-button ${getStatus(selectedId).replace(" ", "").toLowerCase()}`}
                  onClick={() => handleConnect(selectedId)}
                >
                  {getStatus(selectedId)}
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="network-right">
        <svg className="spiderweb">
          {mockNodes.slice(1).map((node, i) => {
            const angle = (i / (mockNodes.length - 1)) * 2 * Math.PI;
            const x = 300 + 150 * Math.cos(angle);
            const y = 200 + 150 * Math.sin(angle);
            return (
              <line
                key={`line-${node.id}`}
                x1={300}
                y1={200}
                x2={x}
                y2={y}
                stroke="#ccc"
              />
            );
          })}
          {mockNodes.map((node, i) => {
            const angle = (i / mockNodes.length) * 2 * Math.PI;
            const x = 300 + 150 * Math.cos(angle);
            const y = 200 + 150 * Math.sin(angle);
            return (
              <foreignObject
                key={node.id}
                x={x - 45}
                y={y - 45}
                width="90"
                height="90"
                className="node-fo"
              >
                <div
                  className={`node-card ${node.type}`}
                  onClick={() => setSelectedId(node.id)}
                >
                  <img src={node.img} alt={node.name} />
                  <p>{node.bio}</p>
                </div>
              </foreignObject>
            );
          })}
        </svg>
        <div className="legend">
          <h4>Legend</h4>
          <ul>
            <li><span className="dot center" /> You</li>
            <li><span className="dot direct" /> Mentor</li>
            <li><span className="dot recommended" /> Peer</li>
            <li><span className="dot cross" /> Cross-School</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
