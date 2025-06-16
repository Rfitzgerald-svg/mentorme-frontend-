import React, { useState } from "react";
import "./MyNetwork.css";

const center = {
  id: "1",
  name: "You",
  role: "Student at The Taft School",
  type: "center",
  img: "https://randomuser.me/api/portraits/men/11.jpg",
  bio: "Finance and lacrosse. Searching for alumni in business."
};

const mentors = Array.from({ length: 10 }).map((_, i) => ({
  id: `m-${i}`,
  name: `Mentor ${i + 1}`,
  role: "Mentor",
  type: "direct",
  img: `https://randomuser.me/api/portraits/men/${i + 20}.jpg`,
  bio: "Experienced professional. Passionate about mentoring."
}));

const peers = Array.from({ length: 10 }).map((_, i) => ({
  id: `p-${i}`,
  name: `Peer ${i + 1}`,
  role: "Student",
  type: "recommended",
  img: `https://randomuser.me/api/portraits/women/${i + 30}.jpg`,
  bio: "Active in clubs. Exploring future careers."
}));

const cross = Array.from({ length: 10 }).map((_, i) => ({
  id: `c-${i}`,
  name: `Cross ${i + 1}`,
  role: "Alum",
  type: "cross",
  img: `https://randomuser.me/api/portraits/men/${i + 40}.jpg`,
  bio: "Entrepreneurial and open to sharing."
}));

const allNodes = [center, ...mentors, ...peers, ...cross];

export default function MyNetwork() {
  const [selectedId, setSelectedId] = useState("1");
  const [connections, setConnections] = useState({});
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [start, setStart] = useState(null);

  const getStatus = (id) => connections[id] || "Connect";
  const handleConnect = (id) => {
    const next =
      connections[id] === "Connect"
        ? "Request Sent"
        : connections[id] === "Request Sent"
        ? "Connected"
        : "Connect";
    setConnections({ ...connections, [id]: next });
  };

  const coords = {};
  const radius = [0, 160, 260, 360];
  const centerX = 600, centerY = 350;

  // Place mentors in ring 1
  mentors.forEach((node, i) => {
    const angle = (i / mentors.length) * 2 * Math.PI;
    coords[node.id] = {
      x: centerX + radius[1] * Math.cos(angle),
      y: centerY + radius[1] * Math.sin(angle),
    };
  });

  // Place peers in ring 2
  peers.forEach((node, i) => {
    const angle = (i / peers.length) * 2 * Math.PI;
    coords[node.id] = {
      x: centerX + radius[2] * Math.cos(angle),
      y: centerY + radius[2] * Math.sin(angle),
    };
  });

  // Place cross-school in ring 3
  cross.forEach((node, i) => {
    const angle = (i / cross.length) * 2 * Math.PI;
    coords[node.id] = {
      x: centerX + radius[3] * Math.cos(angle),
      y: centerY + radius[3] * Math.sin(angle),
    };
  });

  coords["1"] = { x: centerX, y: centerY };

  const handleMouseDown = (e) => {
    setStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!start) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    setStart({ x: e.clientX, y: e.clientY });
    setDrag((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
  };

  const handleMouseUp = () => setStart(null);

  return (
    <div className="network-wrapper">
      <div className="network-left">
        <div className="profile-minis">
          {allNodes.map((node) => (
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
          {allNodes
            .filter((node) => node.id === selectedId)
            .map((node) => (
              <div key={node.id} className="profile-card">
                <img src={node.img} alt={node.name} />
                <h2>{node.name}</h2>
                <p><strong>{node.role}</strong></p>
                <p>{node.bio}</p>
                {node.type !== "center" && (
                  <button
                    className={`connect-button ${getStatus(node.id).replace(" ", "").toLowerCase()}`}
                    onClick={() => handleConnect(node.id)}
                  >
                    {getStatus(node.id)}
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>

      <div
        className="network-right"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <svg className="spiderweb">
          {allNodes.map((node) => {
            const x = coords[node.id].x + drag.x;
            const y = coords[node.id].y + drag.y;

            if (node.type === "center") return null;
            let target;
            if (node.type === "direct") target = coords["1"];
            if (node.type === "recommended") target = coords[mentors[node.id.charAt(2) % mentors.length].id];
            if (node.type === "cross") target = coords[peers[node.id.charAt(2) % peers.length].id];

            return (
              <line
                key={`line-${node.id}`}
                x1={target.x + drag.x}
                y1={target.y + drag.y}
                x2={x}
                y2={y}
                stroke="#aaa"
              />
            );
          })}

          {allNodes.map((node) => {
            const x = coords[node.id].x + drag.x;
            const y = coords[node.id].y + drag.y;
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
