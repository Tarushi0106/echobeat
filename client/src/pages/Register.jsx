import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "http://localhost:5001/api/auth/register"
export const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      // console.log("running")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.ok) {
        // Reset the form state 
        try {

          const res_data = await response.json();
          console.log("res from server", res_data);
          storetokeninls(res_data.token);
        }
        catch (err) {
          console.log(err);
        }

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });

        // Show toast notification on successful registration
        toast.success("Registration Successful!", {
          position: "top-center",
        });

        // Navigate after a slight delay
        setTimeout(() => {
          navigate("/login");
        }, 2000);

      } else {
        const errorData = await response.json();
        toast.error(`Registration Failed: ${errorData.message}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during registration. Please try again.", {
        position: "top-center",
      });
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signup-container">
          <h2>Sign Up</h2> <br />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Enter your username"
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
              aria-label="Enter your username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
              aria-label="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
              aria-label="Enter your phone number"
              pattern="^\d{10}$"  // This enforces exactly 10 digits
              title="Phone number must be exactly 10 digits"  // Optional: provide a custom error message
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
              aria-label="Enter your password"
              pattern="^.{8}$"  // This enforces exactly 8 characters
              title="Password must be exactly 8 characters"  // Optional: provide a custom error message
            />
          </div>


          <button type="submit" id="sign-btn">
            Sign Up
          </button>
        </div>
      </form>

      {/* Footer Section */}
      <footer>
        <div className="f-info">
          <div className="f-info-socials">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
          <div className="f-info-brand">&copy; Wanderlust Pvt Limited</div>
          <div className="f-info-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </footer>

      {/* Toast container to display notifications */}
      <ToastContainer />
    </>
  );
};

export default Register;