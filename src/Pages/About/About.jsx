import React from 'react';
import './About.css';
import school from '../../../public/assets/school.jpg';
import Happening from '../../Components/Happining/Happining';
import Count from '../../Components/Count/Count';
import Chairman from '../../Components/Chairman/Chairman';

const About = ({ selectedOption, data }) => {
  const schoolData = data[selectedOption] || {};

  return (
    <>
      <div className="aboutContainer">
        <div className="aboutImage">
          <img src={school} alt="About" className="aboutImg" />
        </div>
        <div className="aboutText">
          <h2>{schoolData.title || "WELCOME TO OUR SCHOOL!"}</h2>
          <p>{schoolData.about || "No additional information available for this school."}</p>
        </div>
      </div>
      <Count />
      <Chairman />
      <Happening />
    </>
  );
};

export default About;
