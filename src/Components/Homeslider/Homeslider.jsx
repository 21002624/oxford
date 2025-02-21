import React, { useState, useEffect } from "react";
import homeBanner1 from "../../../public/assets/home-banner-1.jpeg";
import homeBanner2 from "../../../public/assets/home-banner-9.jpeg";
import homeBanner3 from "../../../public/assets/home-banner-3.jpeg";
import homeBanner4 from "../../../public/assets/home-banner-4.jpeg";
import "./Homeslider.css"; // Import the CSS file

const images = [homeBanner1, homeBanner2];

const Homeslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="slider-container">
      {/* Only render the active image */}
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="active" />
      </div>

      {/* Dots for indication */}
      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={index === currentIndex ? "dot active" : "dot"}></span>
        ))}
      </div>
    </div>
  );
};

export default Homeslider;
