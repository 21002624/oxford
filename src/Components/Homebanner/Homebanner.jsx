import React from 'react';
import img from '../../../public/assets/b.png';
import './Homebanner.css'; 

const Homebanner = () => {
  return (
    <div className="home-banner">
      <div className="text-container">
        <h1 className="heading">Welcome to Our School</h1>
        <p className="paragraph">
          Our school focuses on excellence in academics, sports, and arts, ensuring holistic development for every student. Join us for an enriching journey!
        </p>
        <div className="yearBtn">
            <button className="animated-button">Apply Now for Admission</button>
        </div>
      </div>
      <div className="image-container">
        <img src={img} alt="School Banner" className="image" />
      </div>
    </div>
  );
};

export default Homebanner;
