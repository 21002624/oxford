import React from 'react';
import './Alumni.css'; 
import alumni from '../../../public/assets/alumni.png'

const Alumni = () => {

  const alumniData = [
    {
      id: 1,
      name: 'John Doe',
      photo: alumni,
      description: 'Software Engineer at TechCorp',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: alumni,
      description: 'Product Manager at Innovate Inc.',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      photo: alumni,
      description: 'UX Designer at CreateStudio',
    },
  ];

  return (
    <div className="alumni-container">
      <h1 className="alumni-title">Our Alumni</h1>
      <div className="alumni-grid">
        {alumniData.map((alumnus) => (
          <div className="alumni-card" key={alumnus.id}>
            <div className="alumni-photo-container">
              <img
                src={alumnus.photo}
                alt={`${alumnus.name}`}
                className="alumni-photo"
              />
            </div>
            <div className="alumni-info">
              <h3 className="alumni-name">{alumnus.name}</h3>
              <p className="alumni-description">{alumnus.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
