import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-center">
          <img src="/logo.svg" alt="MentorMe Logo" className="h-12" />
        </div>

        <h1 className="text-2xl font-semibold text-center text-black">Sign in to MentorMe</h1>

        <GoogleLogin
          onSuccess={(res) => {
            console.log("Google login success:", res);
            alert("Google login successful. Redirecting...");
          }}
          onError={() => {
            alert("Google login failed");
          }}
          width="100%"
        />

        <div className="flex items-center justify-center">
          <span className="border-t border-gray-300 w-full" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <span className="border-t border-gray-300 w-full" />
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-xs font-medium text-gray-600">EMAIL</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-gray-600">PASSWORD</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded-md hover:bg-gray-900 transition"
          >
            Log in
          </button>
        </form>

        <div className="flex flex-col items-center gap-2 pt-4 text-sm text-gray-500">
          <a href="#" className="hover:underline">Use single sign-on</a>
          <a href="#" className="hover:underline">Reset password</a>
          <p>
            No account? <a href="/register" className="text-blue-600 hover:underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
