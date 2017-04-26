import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';

const NavBarMain = () => (
  <AppBar>
    <ul>
      <li><NavLink to="/" activeClassName="selected">Home</NavLink></li>
      <li><NavLink to="/role/new" activeClassName="selected">Role</NavLink></li>
    </ul>
  </AppBar>
);

export default NavBarMain;
