import React from "react";
import "./Correspondent.css";
import img from '../../../public/assets/corres1.webp'

const Correspondent = () => {
  const correspondents = [
    {
      name: "John Doe",
      image: img,
      degree: "Deeply Passionate Educationist & Entrepreneur"
    },
    {
      name: "Jane Smith",
      image: img,
      degree: "Deeply Passionate Educationist & Entrepreneur"
    },
    {
      name: "Robert Brown",
      image: img,
      degree: "Deeply Passionate Educationist & Entrepreneur"
    }
  ];

  return (
        <div className="correspondentDiv">
            <div>
                <h1>Deeply Passionate Educationists & Entrepreneurs</h1>
            </div>
            <div className="correspondent-container">
                {correspondents.map((correspondent, index) => (
                <div key={index} className="correspondent-card">
                <div className="image-container">
                    <img src={correspondent.image} alt={correspondent.name} className="modern-image" />
                </div>
                <h3>{correspondent.name}</h3>
                </div>
            ))}
            </div>
        </div>

  );
};

export default Correspondent;