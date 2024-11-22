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
        <li className="navItem">Addmis</li>
        <li className="navItem">Query</li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
