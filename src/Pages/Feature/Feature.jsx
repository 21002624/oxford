import React from 'react';
import heart from '../../../public/assets/heart.png';
import robot from '../../../public/assets/robot.png';
import running from '../../../public/assets/running.png';
import sports from '../../../public/assets/sports.png';
import tech from '../../../public/assets/tech.png';
import './Feature.css';

const features = [
  { icon: heart, text: 'Experience Teachers' },
  { icon: robot, text: 'Robotics' },
  { icon: running, text: 'Physical Activity' },
  { icon: sports, text: 'Sports Enthusiasm' },
  { icon: tech, text: 'Smart Board Classes' },
  { icon: robot, text: 'AI Revolution' },
];

const Feature = () => {
  return (
    <div>
        <div>
            <h1 className="alumni-title">Features</h1>
        </div>
        <div className="feature-container">
            {features.map((feature, index) => (
                <div className="feature-item" key={index}>

                    <div className='featureDiv'>
                      <img src={feature.icon} alt={feature.text} className="feature-icon" />
                      
                    </div>
                    <div className='featureTectDiv'>
                      <p className="feature-text">{feature.text}</p>
                        <p>We have best experienced teachers with well-versed in all the subjects.</p>
                    </div>
                </div>
            ))}
            </div>
    </div>
  );
};

export default Feature;
