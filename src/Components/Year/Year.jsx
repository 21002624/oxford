import React from "react";
import "./Year.css";
import { Link } from 'react-router-dom';

const Year = ({ data }) => {
  const anniversary = data.anniversary || {}; // Safeguard in case anniversary is missing
  return (
    <div className="year-container">
      <div className="text-content">
        <h1 className="animated-title">
          {anniversary.title}
        </h1>
        <p className="animated-paragraph">
          {anniversary.description}
        </p>
        <div className="yearBtn">
          <button className="animated-button">
            <Link to="/about">About Us</Link>
          </button>
        </div>
      </div>
      <div className="number-content">
        <div className="large-number">{anniversary.year}</div>
      </div>
    </div>
  );
};

export default Year;
