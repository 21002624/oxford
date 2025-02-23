import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import homeBanner1 from "../../../public/assets/home-banner-1.jpeg";
import homeBanner2 from "../../../public/assets/home-banner-9.jpeg";
import "./Homeslider.css";

const images = [homeBanner1, homeBanner2];

const Homeslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="active" />
      </div>
      
      {/* Left Arrow */}
      <button className="arrow left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button className="arrow right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Homeslider;
