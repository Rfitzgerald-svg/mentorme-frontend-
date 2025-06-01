import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { GoogleLogin } from "@react-oauth/google";

const API_BASE = "https://mentorme-production.up.railway.app";

const studentQuizQuestions = [
  "What are your career interests?",
  "What type of work environment do you enjoy?",
  "What are your favorite subjects or activities at school?",
  "What is your communication style?",
  "What are your long-term goals?"
];

const mentorQuizQuestions = [
  "What is your current occupation?",
  "What career path did you follow since graduation?",
  "What activities were you involved in at school?",
  "What kind of mentees would you like to help?",
  "What are you hoping to gain from mentoring?"
];

const studentCrashCoursePhases = [
  { title: "Phase 1: Career Exploration", content: "Discover more about your potential career paths, industry roles, and how they align with your interests." },
  { title: "Phase 2: Building Authentic Connections", content: "Learn how to communicate with mentors, set expectations, and build strong relationships." },
  { title: "Phase 3: Meet Your Mentors", content: "Based on your interests, here are 3-4 mentors you might connect with. Learn about them and choose your mentor." }
];

const mentorCrashCoursePhases = [
  { title: "Phase 1: Defining Your Role", content: "Reflect on your journey, your motivations, and the value you want to provide as a mentor." },
  { title: "Phase 2: Effective Mentorship", content: "Learn how to build trust, offer guidance, and provide support to mentees with different backgrounds." },
  { title: "Phase 3: Connect With Mentees", content: "We'll show you students who could benefit most from your experience. Learn about them and choose who you'd like to connect with." }
];

const mockMentors = [
  { name: "Alex Kim", title: "Product Manager at Google", interests: "Tech, Startups", schoolInvolvement: "Debate Team, Coding Club" },
  { name: "Maria Lopez", title: "Nonprofit Director", interests: "Education, Advocacy", schoolInvolvement: "Student Council, Choir" },
  { name: "David Zhang", title: "Software Engineer at Meta", interests: "AI, Gaming", schoolInvolvement: "Robotics Club, Math Team" }
];

export default function MentorshipOnboarding() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);
  const [courseStep, setCourseStep] = useState(0);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [showMatches, setShowMatches] = useState(false);
  const [chatOpen, setChatOpen] = useState(null);
  const [messages, setMessages] = useState({});
  const [messageInput, setMessageInput] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const quizQuestions = role === "mentor" ? mentorQuizQuestions : studentQuizQuestions;
  const crashCoursePhases = role === "mentor" ? mentorCrashCoursePhases : studentCrashCoursePhases;

  const handleAnswer = (e) => setAnswers({ ...answers, [step]: e.target.value });
  const nextStep = () => step < quizQuestions.length - 1 ? setStep(step + 1) : setComplete(true);
  const nextCourseStep = () => courseStep < crashCoursePhases.length - 1 ? setCourseStep(courseStep + 1) : role === "student" && setShowMatches(true);

  const onGoogleSuccess = async () => {
    const mockDecoded = { name: "Jane Doe", email: "jane@example.com", role: "student" };
    setUser({ name: mockDecoded.name, email: mockDecoded.email });
    setRole(mockDecoded.role);

    // Send to backend
    await fetch(`${API_BASE}/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mockDecoded)
    });
  };

  const openChat = async (mentorName) => {
    setChatOpen(mentorName);
    const res = await fetch(`${API_BASE}/messages/?sender=${user.name}&receiver=${mentorName}`);
    const data = await res.json();
    setMessages((prev) => ({ ...prev, [mentorName]: data.conversation || [] }));
  };

  const sendMessage = async () => {
    if (chatOpen && messageInput.trim()) {
      const msg = { sender: user.name, receiver: chatOpen, text: messageInput };
      await fetch(`${API_BASE}/messages/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(msg)
      });
      setMessages((prev) => ({
        ...prev,
        [chatOpen]: [...(prev[chatOpen] || []), msg]
      }));
      setMessageInput("");
    }
  };

  const slots = ["Monday 3pm", "Tuesday 10am", "Wednesday 1pm", "Friday 9am"];
  const handleSlotSelection = async (slot) => {
    setSelectedSlot(slot);
    await fetch(`${API_BASE}/calendar/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mentor: chatOpen, student: user.name, slot })
    });
  };

  if (!user || !role) return <div className="p-6 text-center"><p className="mb-4">Please sign in to continue:</p><GoogleLogin onSuccess={onGoogleSuccess} onError={() => alert("Login failed")} /></div>;

  return (
    <div className="max-w-xl mx-auto p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <div className="mb-4 text-sm text-gray-500">Logged in as {user.name} ({role})</div>
            {calendarOpen ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Pick a Time</h2>
                <ul className="space-y-2">
                  {slots.map((slot, idx) => (
                    <li key={idx}>
                      <Button variant={selectedSlot === slot ? "default" : "outline"} onClick={() => handleSlotSelection(slot)}>{slot}</Button>
                    </li>
                  ))}
                </ul>
                {selectedSlot && <p className="mt-4 text-sm text-green-600">You selected: {selectedSlot}</p>}
                <Button className="mt-4" onClick={() => setCalendarOpen(false)}>Confirm</Button>
              </div>
            ) : chatOpen ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Chat with {chatOpen}</h2>
                <div className="mb-4 h-40 overflow-y-auto border p-2 rounded">
                  {(messages[chatOpen] || []).map((msg, idx) => (
                    <div key={idx} className="mb-2"><strong>{msg.from}:</strong> {msg.text}</div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input value={messageInput} onChange={(e) => setMessageInput(e.target.value)} placeholder="Type a message..." />
                  <Button onClick={sendMessage}>Send</Button>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button onClick={() => setCalendarOpen(true)}>Schedule</Button>
                  <Button variant="outline" onClick={() => setChatOpen(null)}>Back to Matches</Button>
                </div>
              </div>
            ) : showMatches ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">Recommended Mentors</h2>
                <div className="space-y-4">
                  {mockMentors.map((mentor, index) => (
                    <Card key={index} className="p-4">
                      <h3 className="font-semibold text-lg">{mentor.name}</h3>
                      <p className="text-sm">{mentor.title}</p>
                      <p className="text-sm italic">Interests: {mentor.interests}</p>
                      <p className="text-sm italic">Past involvement: {mentor.schoolInvolvement}</p>
                      <Button className="mt-2" onClick={() => openChat(mentor.name)}>Connect</Button>
                    </Card>
                  ))}
                </div>
              </div>
            ) : !complete ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">{quizQuestions[step]}</h2>
                <Input placeholder="Type your answer..." onChange={handleAnswer} className="mb-4" />
                <Button onClick={nextStep}>Next</Button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold mb-4">{crashCoursePhases[courseStep].title}</h2>
                <p className="mb-4">{crashCoursePhases[courseStep].content}</p>
                <Button onClick={nextCourseStep}>{courseStep < crashCoursePhases.length - 1 ? "Continue" : "See Matches"}</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
