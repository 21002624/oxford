import React from 'react';
import h1 from '../../../public/assets/h1.jpg';
import h2 from '../../../public/assets/h2.jpg';
import h3 from '../../../public/assets/h3.jpg';
import h4 from '../../../public/assets/h4.jpg';
import './Happening.css';

const Happening = () => {
  return (
    <section className="happening-section">
      <div className="happening-header">
        <h1>Happening</h1>
      </div>
      <div className="happening-content">
        <div className="happening-description">
          <p className="happening-text">
            Explore the latest activities and events that define our vibrant campus life.
          </p>
        </div>
        <div className="happening-collage">
          <div className="happening-image-container">
            <img src={h1} alt="Event 1" className="happening-image" />
            <div className="happening-overlay">
              <p>Event 1</p>
              <button>Read More</button>
            </div>
          </div>
          <div className="happening-image-container">
            <img src={h2} alt="Event 2" className="happening-image" />
            <div className="happening-overlay">
              <p>Event 2</p>
              <button>Read More</button>
            </div>
          </div>
          <div className="happening-image-container">
            <img src={h3} alt="Event 3" className="happening-image" />
            <div className="happening-overlay">
              <p>Event 3</p>
              <button>Read More</button>
            </div>
          </div>
          <div className="happening-image-container">
            <img src={h4} alt="Event 4" className="happening-image" />
            <div className="happening-overlay">
              <p>Event 4</p>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Happening;
