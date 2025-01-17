import React from 'react';
import './Feature.css';

const Feature = ({ data }) => {
  if (!data || !data.features) {
    return <p>No features available</p>;
  }

  return (
    <div>
      <div>
        <h1 className="alumni-title">Features</h1>
      </div>
      <div className="feature-container">
        {data.features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <div className="featureDiv">
              <img src={feature.img} alt={feature.title} className="feature-icon" />
            </div>
            <div className="featureTextDiv">
              <p className="feature-text">{feature.title}</p>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
