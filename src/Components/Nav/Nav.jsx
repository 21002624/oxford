import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; 

const Nav = () => {
  return (
    <div className="navContainer">
      <ul className="navList">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/about">About</Link> 
        </li>
        <li className="navItem">Admission</li>
        <li className="navItem">
          <Link to="/academics">Academics</Link> 
        </li>
        <li className="navItem">
          <Link to="/faclities">Faclities</Link> 
        </li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
