import React from 'react';
import './Nav.css'; 

const Nav = () => {
  return (
    <div className="navContainer">
      <ul className="navList">
        <li className="navItem">Home</li>
        <li className="navItem">Movies</li>
        <li className="navItem">TV Shows</li>
        <li className="navItem">Genres</li>
        <li className="navItem">Trending</li>
      </ul>
    </div>
  );
};

export default Nav;
