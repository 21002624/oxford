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

          <div className="footerLinks">
              <div className="footQuickLinktitle">
                <h2>Our Policy</h2>
              </div>
              
                <div className='footQuickLinks'>
                  <p className='footLink'><Link to="/admission">Privacy Policy</Link></p>
                  <p className='footLink'><Link to="/about">Terms & Conditions</Link></p>
                  <p className='footLink'><Link to="/contact">Refunds/Cancellation</Link></p>
                </div>
            </div>      
        </div>

        <div className='footerSchool'>

          <div className="footerLinks">
              <div className="footQuickLinktitle">
                <h2>Quick Links</h2>
              </div>
              
                <div className='footQuickLinks'>
                  <p className='footLink'><Link to="/admission">Admission</Link></p>
                  <p className='footLink'><Link to="/about">About</Link></p>
                  <p className='footLink'><Link to="/contact">Contact</Link></p>
                </div>
            </div>      
        </div>

              <div className='footerSchoolDiv'>
              <h2>Social Links</h2>
              <div className="socialLinks">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaFacebook />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="socialIcon">
                    <FaYoutube />
                  </a>
                </div>
              </div> 
        
        <div>
          <div className='footerSchoolDiv'>
          <h2>Developer</h2>
              <p className='developername'><a href="https://im-akash.netlify.app/" target="_blank" rel="noopener noreferrer">Akash</a></p>
          </div>
        </div>
      </div>

      <div className="footerCopyRight">
        <p>© 2024 Akash. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;