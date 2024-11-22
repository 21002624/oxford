import React, { useState } from 'react';
import './Header.css';
import ModernSearchInput from '../../Components/Search/Search';
import CustomizedSwitches from '../../Components/DarkMode/DarkMode';
import Nav from '../../Components/Nav/Nav';

const Header = () => {

  return (
    <header>
      <div className="headerLogo">
        oxford.in
        <p className='logoDis'>thiruninravur</p>
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
