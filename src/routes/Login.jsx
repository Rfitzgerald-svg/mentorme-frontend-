import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="p-8 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-6">Login with Google</h1>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Google login successful", credentialResponse);
          // TODO: Connect to Supabase or backend here
        }}
        onError={() => {
          alert("Login Failed. Try again.");
        }}
      />
    </div>
  );
}
