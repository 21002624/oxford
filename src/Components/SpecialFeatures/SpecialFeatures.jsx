import React from 'react';
import './SpecialFeatures.css'; 
import feature from '../../../public/assets/feature.jpg';

const SpecialFeatures = () => {
  const featuresData = [
    {
      id: 1,
      title: 'Feature One',
      description: 'This is the description for Feature One.',
      image: feature,
    },
    {
      id: 2,
      title: 'Feature Two',
      description: 'This is the description for Feature Two.',
      image: feature,
    },
    {
      id: 3,
      title: 'Feature Three',
      description: 'This is the description for Feature Three.',
      image: feature,
    },
  ];

  return (
    <div className="special-features-container">
      {featuresData.map((feature) => (
        <div className="feature-card" key={feature.id}>
          <img src={feature.image} alt={feature.title} />
          <div className="feature-content">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialFeatures;
