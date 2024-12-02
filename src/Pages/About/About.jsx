import React from 'react';
import './About.css';
import '../../Components/Happining/Happining';
import Happening from '../../Components/Happining/Happining';

const About = () => {
  return (
    <>
      <div className="aboutContainer">
      <div className="aboutImage">
        <img
          src="https://via.placeholder.com/300"
          alt="About"
          className="aboutImg"
        />
      </div>
      <div className="aboutText">
        <h2>WELCOME TO OUR SCHOOL!</h2>
        <p>
        Oxford Public School, NSK Nagar, Kosavanpalayam, Thiruninravur - 602024, established in 2013, is one of the educational institution which was started Kothai Anand Educational Trust. It is a progressive school based on Indian thought, culture, tradition and the educational ideas of world system.
        </p>
        <br/>
        <p>The school is affiliated to the Central Board of Secondary Education, New Delhi. It prepares students for the All India Secondary School (Class IX, X, XI and XII) Examinations. The school offers various activities to students in order to excel in various competencies viz. Dance, Music-Vocal and Instrumental, Roller Skating, Yoga and Meditation, Table Tennis, Robotics (Competitions Nation wide)</p>
      </div>
    </div>

    <Happening />
    </>
  );
};

export default About;
