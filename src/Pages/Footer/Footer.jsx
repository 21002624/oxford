import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube , FaLinkedin, FaUserCircle } from 'react-icons/fa';
import Branches from '../../Components/Branches/Branches';

const Footer = () => {
  return (
    <footer className="footerContainer">
      <Branches />
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
              <p className='footLink'><Link to="/admission">Admission</Link></p>
              <p className='footLink'><Link to="/about">About</Link></p>
              <p className='footLink'><Link to="/contact">Contact</Link></p>
            </div>
            
        </div>
        
        <div>
          <div className='footerSchoolDiv'>
          <h2>Developer</h2>
            <p>Page proudly developed by a proud school alumnus</p>
              <h2>Akash</h2>
          </div>
        </div>
      </div>

      <p>© 2024 Akash. All Rights Reserved.</p>

    </footer>
  );
};

export default Footer;