import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import toast from "react-hot-toast"; // Import react-hot-toast

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "shinan" && password === "1234") {
      toast.success("Login Successful! Redirecting to Dashboard...");
      navigate("/Adminapp"); // Redirect to /Adminapp
    } else {
      toast.error("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="text-center text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col items-center">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
