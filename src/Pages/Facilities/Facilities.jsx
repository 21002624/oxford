import React from 'react';
import './Facilities.css';
import img from '../../../public/assets/f.jpg'

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
    },
    {
      title: 'Chess',
      description: 'Encouraging strategic thinking and mental agility.',
      achievements: 'Our chess club has won 5 interschool chess tournaments.',
      image: 'chess.png',
    },
    {
      title: 'Dance',
      description: 'Classes in various dance forms to enhance creativity.',
      achievements: 'Our dancers have performed in cultural fests and won 1st prize in 4 competitions.',
      image: 'dance.png',
    },
    {
      title: 'Singing',
      description: 'Vocal training for music enthusiasts.',
      achievements: 'Our singers have won accolades in regional singing contests.',
      image: 'singing.png',
    },
    {
      title: 'Sports',
      description: 'We offer sports like Kho Kho and Volleyball.',
      achievements: 'Our teams have won gold in Kho Kho and silver in Volleyball at district-level tournaments.',
      image: 'sports.png',
    },
  ];

  return (
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
  );
};

export default Facilities;
