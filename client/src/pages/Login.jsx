import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const URL = "http://localhost:5001/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response);
      if (response.ok) {
        alert("Login successful");
        const res_data = await response.json();
        console.log("Response from server:", res_data);
        storetokeninls(res_data.token); 

        // Clear the form by resetting user state
        setUser({
          username: "",
          password: "",
        });
        
        navigate("/");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login"><h4>Login</h4></div>
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
            <div className="pass-link"><a href="#">Forgot password?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Submit" />
            </div>
            <div className="signup-link">Don't have an account? <a href="">Signup now</a></div>
          </form>
        </div>
      </div>
    </div>
  );
};
