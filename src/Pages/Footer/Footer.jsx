import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube , FaLinkedin, FaUserCircle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className='footerSchool'>
            
            <div className='footerSchoolDiv'>
              <h2>Oxford</h2>
              <p>isn’t just a school, it’s where futures are made</p>
              <div className="socialLinks">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaFacebook />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            
            <div className="footerLinks">
            <h2>Links</h2>
              <a href="#privacy" className="footerLink">Privacy Policy</a>
              <a href="#terms" className="footerLink">Terms of Service</a>
              <a href="#contact" className="footerLink">Contact Us</a>
            </div>

            
            
        </div>
        
        <div>
          <div className='footerSchoolDiv'>
          <h2>Developer</h2>
            <p>Page proudly developed by a proud school alumnus</p>
              <h2>Akash</h2>
              <div className="socialLinks">
                  <a href="https://im-akash.netlify.app/" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaUserCircle />
                  </a>
                  <a href="https://www.linkedin.com/in/im-akasharul/" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaLinkedin />
                  </a>
                </div>
          </div>
        </div>
      </div>

      <p>© 2024 Akash. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;
