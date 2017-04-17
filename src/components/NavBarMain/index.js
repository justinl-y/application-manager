import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarMain = () => (
  <ul>
    <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
    <li><NavLink to="/about" activeClassName="selected">About</NavLink></li>
  </ul>
);

export default NavBarMain;
