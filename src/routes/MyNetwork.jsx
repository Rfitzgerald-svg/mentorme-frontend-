import React, { useState } from "react";
import "./MyNetwork.css";

const generateMockNodes = () => {
  const center = [{
    id: "1",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Finance and lacrosse. Searching for alumni in business."
  }];

  const mentors = Array.from({ length: 10 }, (_, i) => ({
    id: `m${i + 1}`,
    name: `Mentor ${i + 1}`,
    role: `Mentor at Firm ${i + 1}`,
    type: "direct",
    img: `https://randomuser.me/api/portraits/men/${20 + i}.jpg`,
    bio: "Experienced professional. Passionate about mentoring."
  }));

  const peers = Array.from({ length: 10 }, (_, i) => ({
    id: `p${i + 1}`,
    name: `Peer ${i + 1}`,
    role: `Student at School ${i + 1}`,
    type: "recommended",
    img: `https://randomuser.me/api/portraits/women/${30 + i}.jpg`,
    bio: "Active in clubs. Exploring future careers."
  }));

  const cross = Array.from({ length: 10 }, (_, i) => ({
    id: `c${i + 1}`,
    name: `Cross Connect ${i + 1}`,
    role: `Alum at School ${i + 1}`,
    type: "cross",
    img: `https://randomuser.me/api/portraits/men/${40 + i}.jpg`,
    bio: "Entrepreneurial and open to sharing."
  }));

  return [...center, ...mentors, ...peers, ...cross];
};

const mockNodes = generateMockNodes();

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

  const center = { x: 400, y: 300 };

  const layoutNodes = (type, radius, offset = 0) => {
    const filtered = mockNodes.filter(n => n.type === type);
    return filtered.map((node, i) => {
      const angle = ((i + offset) / filtered.length) * 2 * Math.PI;
      const x = center.x + radius * Math.cos(angle);
      const y = center.y + radius * Math.sin(angle);
      return { ...node, x, y };
    });
  };

  const positionedNodes = [
    ...layoutNodes("direct", 120),
    ...layoutNodes("recommended", 220),
    ...layoutNodes("cross", 320),
    {
      ...mockNodes.find(n => n.type === "center"),
      x: center.x,
      y: center.y
    }
  ];

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
                <p className="mutuals">Shared interest</p>
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
        <svg className="spiderweb" viewBox="0 0 800 600">
          {positionedNodes.map((node) => {
            if (node.type === "center") return null;
            return (
              <line
                key={`line-${node.id}`}
                x1={center.x}
                y1={center.y}
                x2={node.x}
                y2={node.y}
                stroke="#ccc"
              />
            );
          })}

          {positionedNodes.map((node) => (
            <foreignObject
              key={node.id}
              x={node.x - 45}
              y={node.y - 45}
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
          ))}
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
