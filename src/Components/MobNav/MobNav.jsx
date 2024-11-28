import React from 'react'
import { Link } from 'react-router-dom'
import './MobNav.css'; 



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
          <Link to="/admission">Admission</Link>
        </li>
        <li className="mobNavItem">
          <Link to="/academics">Academics</Link> 
        </li>
      </ul>

      <ul className="mobNav">
        <li className="mobNavItem">
          <Link to="/faclities">Faclities</Link> 
        </li>
        <li className="mobNavItem">
          <Link to="/about">About</Link> 
        </li>
        <li className="mobNavItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default MobNav
