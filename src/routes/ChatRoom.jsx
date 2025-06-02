import React from "react";
import { useParams } from "react-router-dom";

export default function ChatRoom() {
  const { matchId } = useParams();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Chat Room: {matchId}</h1>
      <p>Messages for this match will go here.</p>
    </div>
  );
}
