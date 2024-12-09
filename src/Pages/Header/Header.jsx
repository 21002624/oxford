import React, { useState } from 'react';
import './Header.css';
import CustomizedSwitches from '../../Components/DarkMode/DarkMode';
import Nav from '../../Components/Nav/Nav';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import MobNav from '../../Components/MobNav/MobNav';

const Header = ({ selectedOption, setSelectedOption }) => {
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);
  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const ShowMobNav = () => {
    setIsMobNavVisible(!isMobNavVisible);
  };

  return (
    <header>

      <div className="headerLogo">
        
        <div >
          oxford.in
            <div className='modernSelectDiv' >
              <select
              value={selectedOption}
              onChange={handleSelectChange}
              className="modernSelect"
            >
              <option value="matric">Oxford matric school</option>
              <option value="Public">Chennai public school</option>
              <option value="Bloomingdale">Oxford's Bloomingdale</option>
            </select>
            </div>
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
