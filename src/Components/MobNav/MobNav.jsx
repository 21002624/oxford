import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobNav.css';

const MobNav = () => {
  return (
    <div>
      <ul className="mobNav">
        <li className="mobNavItem">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Home
          </NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            About
          </NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink 
            to="/admission" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Admission
          </NavLink>
        </li>
      </ul> 

      <ul className="mobNav">
        <li className="mobNavItem">
          <NavLink 
            to="/faclities" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Facilities
          </NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink 
            to="/academics" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Academics
          </NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobNav;
