import React from 'react';
import './Map.css'; 

const Map = () => {
  return (
    <div className="mapContainer">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8963673124344!2d80.02579160182012!3d13.115028298659626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5289211a5846cf%3A0xb23f9cbc2fb3bf96!2sOxford%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1732250290666!5m2!1sen!2sin" 
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
