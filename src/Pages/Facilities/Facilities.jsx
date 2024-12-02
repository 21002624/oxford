import React from 'react';
import './Facilities.css';
import img from '../../../public/assets/f.jpg'
import SpecialFeatures from '../../Components/SpecialFeatures/SpecialFeatures';

const Facilities = () => {
  const facilities = [
    {
      title: 'Yoga',
      description: 'Regular yoga sessions for mental and physical well-being.',
      achievements: 'Our students have participated in interschool yoga competitions and won 3 gold medals.',
      image: 'yoga.png',
    },
    {
      title: 'Karate',
      description: 'Training in self-defense and martial arts.',
      achievements: 'Our karate team has secured 2nd place in the state-level martial arts championship.',
      image: 'karate.png',
    }
  ];

  return (
    <>
        <div className="facilities-container">
        <h1>Our Facilities</h1>
        <p>
          We offer a variety of facilities and activities to promote holistic development. Below are the facilities along with their achievements:
        </p>
        <div className="facilities-list">
          {facilities.map((facility, index) => (
            <div key={index} className="facility-item">
              <div className="facility-header">
                <img
                  src={img} 
                  alt={facility.title}
                  className="facility-image"
                />
                <h2>{facility.title}</h2>
              </div>
              <p>{facility.description}</p>
              <div className="facility-achievements">
                <strong>Achievements:</strong> {facility.achievements}
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpecialFeatures />
    </>
  );
};

export default Facilities;
