import React from "react";
import "./Youtubeslide.css";

const Youtubeslide = () => {
  return (
    <div className="youtube-container">
      <div className="video">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/7eogR103sPU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text">
        <h2>Video Title</h2>
        <p>
        We started with a small school, few students, one Velammal Educational Trust and a dedicated set of teachers back in 1986. Today we are an educational edifice with lakhs of students, hundreds of teachers and several top-notch institutions growing under our umbrella. Our institutional breadth spans from Kindergarten (KG) to Post-Graduate levels. With focus on evolving our teaching and learning practices to meet the best of global standards the group pioneered the Velammal New Gen Edu Network mission.
Read More
        </p>
      </div>
    </div>
  );
};

export default Youtubeslide;
