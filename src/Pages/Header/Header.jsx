import React, { useState } from 'react';
import './Header.css';
import CustomizedSwitches from '../../Components/DarkMode/DarkMode';
import Nav from '../../Components/Nav/Nav';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import MobNav from '../../Components/MobNav/MobNav';

const Header = () => {
  // State to toggle mobile menu visibility
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);

  // Function to toggle MobNav visibility
  const ShowMobNav = () => {
    setIsMobNavVisible(!isMobNavVisible);
  };

  return (
    <header>
      {/* Mobile Navigation */}
      <div className="headerLogo">
        <div>
          oxford.in
          <p className="logoDis">thiruninravur</p>
        </div>
        <div className="mobMenuIcon" onClick={ShowMobNav}>
          {/* Toggle between Menu and Close icon */}
          {isMobNavVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>

      {/* Mobile Nav items, Slide down when clicked */}
      <div className={`mobNavDiv ${isMobNavVisible ? 'visible' : ''}`}>
        <MobNav />
      </div>

      {/* Header Left Section */}
      <div className="headerLeft">
        <div className="headerSearch">
          <Nav />
        </div>
        <div className="headerIcons">
          <CustomizedSwitches />
        </div>
      </div>
    </header>
  );
};

export default Header;
