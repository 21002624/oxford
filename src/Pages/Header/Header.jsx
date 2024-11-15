import React, { useState } from 'react';
import './Header.css';
import ModernSearchInput from '../../Components/Search/Search';
import CustomizedSwitches from '../../Components/DarkMode/DarkMode';

const Header = () => {

  return (
    <header>
      <div className="headerLogo">
        show time
      </div>
      <div className="headerLeft">
        <div className="headerSearch">
          <ModernSearchInput />
        </div>
        <div className="headerIcons">
          <CustomizedSwitches />
        </div>
      </div>
    </header>
  );
};

export default Header;
