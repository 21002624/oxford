import React, { useState } from 'react';
import './Academics.css';
import SchoolHighlights from '../../Components/SchoolHighlights/SchoolHighlights';
import Homeslider from '../../Components/Homeslider/Homeslider';
import SpecialFeatures from '../../Components/SpecialFeatures/SpecialFeatures';

const Academics = () => {
  // Sample data for academic results
  const data = {
    2021: [
      { name: 'Akash A', marks: 514 },
      { name: 'Jane Smith', marks: 90 },
      { name: 'Sam Brown', marks: 88 },
      { name: 'Lucy Green', marks: 85 },
      { name: 'Chris Blue', marks: 83 },
      { name: 'Alice White', marks: 81 },
      { name: 'Tom Black', marks: 80 },
      { name: 'Emma Gray', marks: 78 },
      { name: 'Ethan Gold', marks: 75 },
      { name: 'Sophia Silver', marks: 70 },
    ],
    2022: [
      { name: 'Olivia Violet', marks: 92 },
      { name: 'Liam Orange', marks: 89 },
      { name: 'Mia Cyan', marks: 87 },
      { name: 'Noah Magenta', marks: 85 },
      { name: 'Ava Lavender', marks: 84 },
      { name: 'Isabella Yellow', marks: 83 },
      { name: 'Mason Indigo', marks: 82 },
      { name: 'Lucas Red', marks: 80 },
      { name: 'Evelyn Green', marks: 78 },
      { name: 'James Blue', marks: 76 },
    ],
  };

  const [selectedYear, setSelectedYear] = useState(Object.keys(data)[0]);

  return (
    <>
    <Homeslider />
    <SchoolHighlights />
    <div className="academics-container">
      <div className="header-row">
        <h1>Academic Results</h1>
        <div className="dropdown-container">
          <label htmlFor="year-select">Select Year:</label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {Object.keys(data).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {data[selectedYear].map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Academics;
