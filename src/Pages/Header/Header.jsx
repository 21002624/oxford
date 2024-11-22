import React, { useState } from 'react';
import './Header.css';
import CustomizedSwitches from '../../Components/DarkMode/DarkMode';
import Nav from '../../Components/Nav/Nav';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import MobNav from '../../Components/MobNav/MobNav';

const Header = () => {
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);
  const ShowMobNav = () => {
    setIsMobNavVisible(!isMobNavVisible);
  };

  return (
    <header>

      <div className="headerLogo">
        <div>
          oxford.in
          <p className="logoDis">thiruninravur</p>
        </div>
        <div className="mobMenuIcon" onClick={ShowMobNav}>
          {isMobNavVisible ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>


      <div className={`mobNavDiv ${isMobNavVisible ? 'visible' : ''}`}>
        <MobNav />
      </div>

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
