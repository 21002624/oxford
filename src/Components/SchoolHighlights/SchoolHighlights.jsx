import React from "react";
import "./SchoolHighlights.css";

const highlights = [
  {
    title: "Blended Learning",
    description:
      "Exposure to newer technological tools for learning, preparing students for the future."
  },
  {
    title: "Student-led Events",
    description:
      "Regular planned student-led events to develop leadership skills."
  },
  {
    title: "Inquiry-based Learning",
    description:
      "An interdisciplinary approach with a small student-to-facilitator ratio."
  },
  {
    title: "Personalised Assessment",
    description:
      "Adaptive formative assessment to prepare students for summative exams and competitions."
  }
];

const SchoolHighlights = () => {
  return (
    <div className="highlights-container">
      <div className="left-text">
        <h2>Nationally renowned CBSE curriculum</h2>
        <p>Delivered using global teaching practices.</p>
      </div>
      <div className="right-cards">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-card">
            <h3>{highlight.title}</h3>
            <p>{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolHighlights;