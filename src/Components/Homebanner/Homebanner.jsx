import React from 'react';
import img from '../../../public/assets/b.png';
import './Homebanner.css'; 

const Homebanner = ({data}) => {
  const { title = "Welcome to Oxford", description = "Oxford provides a world-class education and facilities." } = data || {};

  return (
    <div className="home-banner">
      <div className="text-container">
        <h1 className="heading">{title}</h1>
        <p className="paragraph">
          {description}
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
