import React from 'react'
import { Link } from 'react-router-dom'
import './MobNav.css'; 
import CustomizedSwitches from '../DarkMode/DarkMode';



const MobNav = () => {
  return (
    <div>
      <ul className="mobNav">
        <li className="mobNavItem">
          <Link to="/">Home</Link>
        </li>
        <li className="mobNavItem">
          <Link to="/about">About</Link> 
        </li>
        <li className="mobNavItem">
          <Link to="/contact">Contact</Link>
        </li>
        <li>
        <div className="darkmodemobile">
          <CustomizedSwitches customStyle={{ width: '30px', height: '30px'}} />
        </div>
        </li>
      </ul>
    </div>
  )
}

export default MobNav
