import React, { useState } from "react";
import { users } from "../data/users";

const Register = ({ switchToLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const exists = users.find(
      (user) => user.username === username || user.email === email
    );
    if (exists) {
      setMessage("Username or Email already exists");
      return;
    }

    users.push({
      id: users.length + 1,
      username,
      email,
      password
    });

    setMessage("Registration successful!");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const handleSocialLogin = (platform) => {
    alert(`Login with ${platform} clicked!`);
  };

  return (
    <div className="w-full max-w-md p-8 sm:p-10 bg-white shadow-xl rounded-xl">
      {/* Top Text */}
      <p className="text-center text-gray-600 mb-2">Create your account to get started</p>

      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome!</h2>

      {/* Form */}
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}

      <p className="mt-4 text-center text-gray-600">
        Already a user?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={switchToLogin}
        >
          Sign in
        </span>
      </p>

      {/* Social Login */}
      <div className="mt-6 space-y-2">
        <button
          onClick={() => handleSocialLogin("Google")}
          className="w-full flex justify-center items-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => handleSocialLogin("Facebook")}
          className="w-full flex justify-center items-center bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default Register;
