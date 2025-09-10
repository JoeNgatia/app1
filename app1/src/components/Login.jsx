import React, { useState } from "react";
import { users } from "../data/users";
import ForgotPassword from "./ForgotPassword";

const Login = ({ onLogin, switchToRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setMessage("Login successful!");
      onLogin(user);
    } else {
      setMessage("Invalid username or password");
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Login with ${platform} clicked!`);
  };

  if (showForgot) {
    return <ForgotPassword switchToLogin={() => setShowForgot(false)} />;
  }

  return (
    <div className="w-full max-w-md p-8 sm:p-10 bg-white shadow-xl rounded-xl">
      <p className="text-center text-gray-600 mb-2">Sign in to your account</p>
      <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back!</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
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
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}

      <p
        className="mt-4 text-center text-blue-500 cursor-pointer"
        onClick={() => setShowForgot(true)}
      >
        Forgot Password?
      </p>

      <p className="mt-2 text-center text-gray-600">
        Don't have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={switchToRegister}>
          Register
        </span>
      </p>

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

export default Login;
