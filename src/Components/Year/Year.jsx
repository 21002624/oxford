import React from "react";
import "./Year.css";
import { Link } from 'react-router-dom';

const Year = () => {
  return (
    <div className="year-container">
      <div className="text-content">
        <h1 className="animated-title">
          Celebrating 25 Glorious Years!
        </h1>
        <p className="animated-paragraph">
          At Oxford, we are dedicated to nurturing minds, inspiring creativity, and shaping the leaders of tomorrow. Established in 1996
          
        </p>
        <div className="yearBtn">
            <button className="animated-button">
              <Link to="/about">About Us</Link> 
            </button>
        </div>
      </div>
      <div className="number-content">
        <div className="large-number">25</div>
      </div>
    </div>
  );
};

export default Year;
