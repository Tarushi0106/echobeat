import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

// Define the API URL
const URL = "http://localhost:5001/api/auth/login";

export const Login = () => {
  // State for user input
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  // Function to handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (!user.username || !user.password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Sending data:", user); // Debug: Log user input

    try {
      // Send the login request
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("Login form response:", response); // Debug: Log response object

      if (response.ok) {
        const res_data = await response.json();
        console.log("Response from server:", res_data); // Debug: Log server response

        // Store token in localStorage (assuming a function exists for this)
        localStorage.setItem("authToken", res_data.token);

        // Clear form fields
        setUser({
          username: "",
          password: "",
        });

        // Navigate to the home page
        navigate("/");
        toast.success("Login successful!");
      } else {
        // Parse and display server error
        const errorData = await response.json();
        console.error("Error details:", errorData); // Debug: Log error details
        alert("Invalid credentials: " + (errorData.message || "Unknown error"));
      }
    } catch (error) {
      // Handle network errors
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Render the login form
  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">
          <h4>Login</h4>
        </div>
      </div>
      <div className="form-container">
        <div className="form-inner">
          <form onSubmit={handleSubmit} className="login">
            <div className="field">
              <input
                type="text"
                name="username"
                placeholder="Email Address"
                value={user.username}
                onChange={handleInput}
                required
              />
            </div>
            <div className="field">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Submit" />
            </div>
            <div className="signup-link">
              Don't have an account? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
