import React, { useState } from "react";
import "./MyNetwork.css";

const generateNodes = () => {
  const center = {
    id: "1",
    name: "You",
    role: "Student at The Taft School",
    type: "center",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    bio: "Finance and lacrosse. Searching for alumni in business.",
  };

  const mentors = Array.from({ length: 10 }, (_, i) => ({
    id: `m${i}`,
    name: `Mentor ${i + 1}`,
    role: "Mentor",
    type: "direct",
    img: `https://randomuser.me/api/portraits/men/${i + 20}.jpg`,
    bio: "Experienced professional. Passionate about mentoring.",
  }));

  const peers = Array.from({ length: 10 }, (_, i) => ({
    id: `p${i}`,
    name: `Peer ${i + 1}`,
    role: "Peer",
    type: "recommended",
    img: `https://randomuser.me/api/portraits/women/${i + 40}.jpg`,
    bio: "Active in clubs. Exploring future careers.",
  }));

  const cross = Array.from({ length: 10 }, (_, i) => ({
    id: `c${i}`,
    name: `Alum ${i + 1}`,
    role: "Alum from another school",
    type: "cross",
    img: `https://randomuser.me/api/portraits/men/${i + 60}.jpg`,
    bio: "Entrepreneurial and open to sharing.",
  }));

  return [center, ...mentors, ...peers, ...cross];
};

export default function MyNetwork() {
  const [nodes] = useState(generateNodes());
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

  const centerX = 400;
  const centerY = 300;
  const radius = [0, 120, 220, 320];
  const center = nodes[0];
  const mentors = nodes.filter((n) => n.type === "direct");
  const peers = nodes.filter((n) => n.type === "recommended");
  const cross = nodes.filter((n) => n.type === "cross");

  const coords = { [center.id]: { x: centerX, y: centerY } };

  mentors.forEach((node, i) => {
    const angle = (i / mentors.length) * 2 * Math.PI;
    const x = centerX + radius[1] * Math.cos(angle);
    const y = centerY + radius[1] * Math.sin(angle);
    coords[node.id] = { x, y };
  });

  peers.forEach((node, i) => {
    const angle = (i / peers.length) * 2 * Math.PI;
    const x = centerX + radius[2] * Math.cos(angle);
    const y = centerY + radius[2] * Math.sin(angle);
    coords[node.id] = { x, y };
  });

  cross.forEach((node, i) => {
    const angle = (i / cross.length) * 2 * Math.PI;
    const x = centerX + radius[3] * Math.cos(angle);
    const y = centerY + radius[3] * Math.sin(angle);
    coords[node.id] = { x, y };
  });

  return (
    <div className="network-wrapper">
      <div className="network-left">
        <div className="profile-minis">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`mini-profile ${node.type} ${
                selectedId === node.id ? "selected" : ""
              }`}
              onClick={() => setSelectedId(node.id)}
            >
              <img src={node.img} alt={node.name} />
            </div>
          ))}
        </div>

        <div className="profile-expanded">
          {nodes
            .filter((node) => node.id === selectedId)
            .map((node) => (
              <div key={node.id} className="profile-card">
                <img src={node.img} alt={node.name} />
                <h2>{node.name}</h2>
                <p><strong>{node.role}</strong></p>
                <p>{node.bio}</p>
                {node.id !== "1" && (
                  <button
                    className={`connect-button ${getStatus(selectedId)
                      .replace(" ", "")
                      .toLowerCase()}`}
                    onClick={() => handleConnect(selectedId)}
                  >
                    {getStatus(selectedId)}
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>

      <div className="network-right">
        <svg className="spiderweb">
          {nodes.map((target) => {
            if (target.id === "1") return null;

            const x1 = coords["1"].x;
            const y1 = coords["1"].y;
            const x2 = coords[target.id].x;
            const y2 = coords[target.id].y;

            return (
              <line
                key={`line-${target.id}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#ccc"
              />
            );
          })}

          {nodes.map((node) => (
            <foreignObject
              key={node.id}
              x={coords[node.id].x - 45}
              y={coords[node.id].y - 45}
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
