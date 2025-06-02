import React, { useState } from "react";

const slots = [
  "Monday 10:00 AM",
  "Monday 2:00 PM",
  "Tuesday 11:00 AM",
  "Wednesday 1:00 PM",
  "Friday 3:00 PM"
];

export default function CalendarPage() {
  const [bookedSlot, setBookedSlot] = useState(null);

  const handleBook = (slot) => {
    setBookedSlot(slot);
    alert(`You booked: ${slot}`);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book a Session with Your Mentor</h1>
      <div className="grid grid-cols-1 gap-4">
        {slots.map((slot, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
            <span>{slot}</span>
            <button
              className={`px-4 py-2 rounded ${
                bookedSlot === slot ? "bg-gray-400 text-white" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={bookedSlot === slot}
              onClick={() => handleBook(slot)}
            >
              {bookedSlot === slot ? "Booked" : "Book"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
