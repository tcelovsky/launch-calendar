import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      {/* <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse" id="main-navigation">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' exact>Home</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/launches' exact>Launch Calendar</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to='/about' exact>About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;