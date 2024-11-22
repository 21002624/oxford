import React, { useState, useEffect } from 'react';
import './ImgSlider.css';
import img1 from '../../../public/assets/1.jpg';
import img2 from '../../../public/assets/2.jpg';
import img3 from '../../../public/assets/3.jpg';

const ImgSlider = () => {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="sliderContainer">
      <div
        className="sliderImage"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>
      <div className="sliderDots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImgSlider;
