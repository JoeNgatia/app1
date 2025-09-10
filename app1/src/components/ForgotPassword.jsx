import React, { useState } from "react";
import { users } from "../data/users";

const ForgotPassword = ({ switchToLogin }) => {
  const [identifier, setIdentifier] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.username === identifier || u.email === identifier
    );

    if (user) {
      setMessage(`Your password is: ${user.password}`);
    } else {
      setMessage("User not found.");
    }
  };

  return (
    <div className="w-full max-w-md p-8 sm:p-10 bg-white shadow-xl rounded-xl">
      <p className="text-center text-gray-600 mb-2">Enter your username or email</p>
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password?</h2>

      <form onSubmit={handleForgotPassword} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Username / Email</label>
          <input
            type="text"
            placeholder="Enter your username or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Retrieve Password
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}

      <p className="mt-4 text-center text-gray-600">
        Remembered your password?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={switchToLogin}
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;
