import React, { useEffect, useState } from 'react';
import whatsappIcon from '../../../public/assets/whatsapp-icon.png';
import email from '../../../public/assets/email.png';
import youtube from '../../../public/assets/youtube.png';
import enquire from '../../../public/assets/enquire.png';

const Enquire = () => {
  const [visible, setVisible] = useState(true);
  const [hoveredIcon, setHoveredIcon] = useState(null); // Store the hovered icon state
  const [isMobile, setIsMobile] = useState(false);
  let inactivityTimer;

  useEffect(() => {
    // Function to handle user activity
    const handleUserActivity = () => {
      clearTimeout(inactivityTimer);
      setVisible(true);
      inactivityTimer = setTimeout(() => setVisible(false), 10000);
    };

    // Add event listeners for user activity
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('click', handleUserActivity);

    // Start the inactivity timer
    inactivityTimer = setTimeout(() => setVisible(false), 10000);

    // Cleanup event listeners and timer on component unmount
    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      clearTimeout(inactivityTimer);
    };
  }, []);

  useEffect(() => {
    // Function to detect screen size
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    // Check screen size on load and when resized
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const icons = [
    { src: whatsappIcon, alt: 'WhatsApp Icon', top: '40%', bgColor: '#1fff5a', id: 'whatsapp' },
    { src: youtube, alt: 'YouTube Icon', top: '56%', bgColor: '#8c0000', id: 'youtube' },
    { src: email, alt: 'Email Icon', top: '48%', bgColor: '#ff1414', id: 'email' },
    { src: enquire, alt: 'Enquire Icon', top: '64%', bgColor: '#f237ff', id: 'enquire' },
  ];

  // Do not render the component on mobile view
  if (isMobile) return null;

  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            right: 10,
            width: '30px',
            height: '30px',
            top: icon.top,
            transform: visible ? 'translateX(0)' : 'translateX(100%)', // Slide in/out
            backgroundColor: icon.bgColor,
            padding: '10px',
            borderRadius: '50%',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.5s ease-in-out',
            zIndex: 9999, // Smooth slide transition
          }}
        >
          <img
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '50%',
              transform: hoveredIcon === icon.id ? 'scale(1.1)' : 'scale(1)', // Hover effect
              transition: 'transform 0.3s ease-in-out', // Smooth scale transition
            }}
            src={icon.src}
            alt={icon.alt}
            onMouseEnter={() => setHoveredIcon(icon.id)} // Trigger hover state on enter
            onMouseLeave={() => setHoveredIcon(null)} // Remove hover state on leave
          />
        </div>
      ))}
    </>
  );
};

export default Enquire;
