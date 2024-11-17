import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'; 
import pufferfish from './puffer-fish.png';

export const Error = () => {
  return (
    <div className="error-container">
      <div className="error-text">
        <h1>Something's wrong here...</h1>
        <p>
          Uh oh, we couldn't find the link you clicked.
          <br />
          Most URLs are 4-6 characters, and only include letters and numbers (and are case sensitive).
        </p>
        <p>
          <NavLink to="/http-errors">Would you like to learn about HTTP errors?</NavLink>
        </p>
      </div>
      <div className="floating-image">
        <img src={pufferfish} alt="Pufferfish" />
      </div>
    </div>
  );
};

export default Error;

