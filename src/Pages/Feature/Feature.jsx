import React from 'react';
import heart from '../../../public/assets/heart.png';
import robot from '../../../public/assets/robot.png';
import running from '../../../public/assets/running.png';
import sports from '../../../public/assets/sports.png';
import tech from '../../../public/assets/tech.png';
import Notice from '../../Components/Notice/Notice'
import './Feature.css';

const features = [
  { icon: heart, text: 'Heart Health' },
  { icon: robot, text: 'Robotics Innovation' },
  { icon: running, text: 'Fitness Goals' },
  { icon: sports, text: 'Sports Enthusiasm' },
  { icon: tech, text: 'Tech Advancements' },
  { icon: robot, text: 'AI Revolution' },
];

const Feature = () => {
  return (
    <div>
        <div>
            <h1>Features</h1>
        </div>
        <div className="feature-container">
            {features.map((feature, index) => (
                <div className="feature-item" key={index}>

                    <img src={feature.icon} alt={feature.text} className="feature-icon" />
                    <p className="feature-text">{feature.text}</p>
                    <div>
                        <p>dewhbjh</p>
                    </div>
                </div>
            ))}
            </div>
            <Notice />
    </div>
  );
};

export default Feature;
