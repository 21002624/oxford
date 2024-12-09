import React from 'react'
import { NavLink } from 'react-router-dom'
import './MobNav.css'; 



const MobNav = () => {
  return (
    <div>
      <ul className="mobNav">
        <li className="mobNavItem">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink to="/about">About</NavLink> 
        </li>
        <li className="mobNavItem">
          <NavLink to="/admission">Admission</NavLink>
        </li>
        <li className="mobNavItem">
          <NavLink to="/academics">Academics</NavLink> 
        </li>
      </ul>

      <ul className="mobNav">
        <li className="mobNavItem">
          <NavLink to="/faclities">Faclities</NavLink> 
        </li>
        <li className="mobNavItem">
          <NavLink to="/about">About</NavLink> 
        </li>
        <li className="mobNavItem">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MobNav
