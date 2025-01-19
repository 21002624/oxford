import React from 'react';
import CountUp from 'react-countup';
import './Count.css'; // Optional: For styling

const Count = () => {
  const stats = [
    { label: 'Years of Experience', end: 25 },
    { label: 'Students', end: 1000, suffix: '+' },
    { label: 'Faculty Members', end: 50, suffix: '+' },
    { label: 'Transport Vehicles', end: 25, suffix: '+' },
  ];

  return (
    <div className="count-container">
      {stats.map((stat, index) => (
        <div key={index} className="count-item">
          <h2>
            <CountUp start={0} end={stat.end} duration={2.5} suffix={stat.suffix || ''} />
          </h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Count;
