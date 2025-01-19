import React from 'react';
import './Chairman.css';
import chairmanImage from '../../../public/assets/school.jpg'; // Update the path to your image

const Chairman = () => {
  return (
    <div className='Chairman'>

    <div className="chairmanTitle">
        <h1>Chaiman</h1>
    </div>

    <div className="chairman-container">
      
      <div className="chairman-text">
        <h2>Our Vision</h2>
        <p>
          To empower students with the knowledge, skills, and values necessary to become responsible citizens and
          visionary leaders. We strive to create a learning environment that fosters innovation, inclusivity, and
          excellence, shaping a brighter future for all.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver quality education that inspires critical thinking, nurtures creativity, and instills
          a lifelong love for learning. We aim to provide students with the tools they need to achieve personal and
          professional success while contributing positively to society.
        </p>
      </div>

      <div className="chairman-image">
        <img src={chairmanImage} alt="Chairman" />
      </div>
    </div>
    </div>
  );
};

export default Chairman;
