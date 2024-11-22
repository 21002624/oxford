import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutImage">
        <img
          src="https://via.placeholder.com/300"
          alt="About"
          className="aboutImg"
        />
      </div>
      <div className="aboutText">
        <h2>About Us</h2>
        <p>
          Welcome to our website! We are passionate about providing the best
          services to our customers. Our mission is to deliver high-quality
          products and ensure customer satisfaction. Join us on our journey as
          we continue to grow and innovate. Thank you for being a part of our
          story!
        </p>
      </div>
    </div>
  );
};

export default About;
