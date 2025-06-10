import React from "react";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      {/* Container */}
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-8 space-y-6">
        {/* Logo top-left absolute */}
        <div className="absolute top-6 left-6">
          <img src="/logo.svg" alt="MentorMe Logo" className="h-6" />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center text-gray-900">
          Sign in to MentorMe
        </h1>

        {/* Google Login */}
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

        {/* Divider */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="border-t border-gray-300 flex-grow" />
          <span>or</span>
          <div className="border-t border-gray-300 flex-grow" />
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@school.edu"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs font-medium text-gray-600 mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-md text-sm hover:bg-blue-700 transition"
          >
            Log in
          </button>
        </form>

        {/* Footer Links */}
        <div className="pt-2 space-y-2 text-center text-sm text-blue-600">
          <a href="#" className="block hover:underline">Use single sign-on</a>
          <a href="#" className="block hover:underline">Reset password</a>
          <p className="text-gray-500">
            No account? <a href="/register" className="text-blue-600 hover:underline">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}
