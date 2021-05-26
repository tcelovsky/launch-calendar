import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-xs navbar-default navbar-fixed-top">
      <div className="navbar-collapse">
        <ul className="navbar-nav navbar-right">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/launches' exact>Launch Calendar</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about' exact>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;