import React, { useEffect, useState } from "react";
import { signUpWithEmail } from "../services/AuthService";

export default function RegisterEmail() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function testSignup() {
      try {
        const { error, data } = await signUpWithEmail("test@mentorme.com", "password123");
        if (error) {
          setError(error.message);
        } else {
          setResult("Success! Account created.");
          console.log("SUPABASE DATA:", data);
        }
      } catch (err) {
        setError("Unexpected error");
        console.error(err);
      }
    }

    testSignup();
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", padding: "2rem" }}>
      <h1>Supabase Connection Test</h1>
      {result && <p style={{ color: "green" }}>{result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
