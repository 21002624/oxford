import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Nav.css';

const Nav = () => {
  return (
    <div className="navContainer">
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/academics" activeClassName="active">Academics</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/admission" activeClassName="active">Admission</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/faclities" activeClassName="active">Facilities</NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
