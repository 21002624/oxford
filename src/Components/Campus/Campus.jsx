import React from 'react';
import './Campus.css'; 

const Campus = () => {
  return (
    <div className="campus-container">
      <label htmlFor="campusSelect" className="campus-label">
        <h2>PAVING THE PATH TO SUCCESS</h2>
      </label>
      <select id="campusSelect" className="campus-select">
        <option value="oxford">Oxford matric - Thiruninravur</option>
        <option value="cambridge">CBSE - Thiruninravur</option>
        <option value="harvard">Little School</option>
      </select>
    </div>
  );
};

export default Campus;
