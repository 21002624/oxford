import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <p>© 2024 Akash. All Rights Reserved.</p>
        <div className="footerLinks">
          <a href="#privacy" className="footerLink">Privacy Policy</a>
          <a href="#terms" className="footerLink">Terms of Service</a>
          <a href="#contact" className="footerLink">Contact Us</a>
        </div>
        <div className="socialLinks">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
