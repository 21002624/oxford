import React from 'react';
import img from '../../../public/assets/b.png';
import './Homebanner.css'; 
import { Link } from 'react-router-dom';

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
            <button className="animated-button" ><Link to="/admission">Apply Now for Admission</Link></button>
        </div>
      </div>
      <div className="image-container">
        <img src={img} alt="School Banner" className="image" />
      </div>
    </div>
  );
};

export default Homebanner;
