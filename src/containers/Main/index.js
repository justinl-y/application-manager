import React from 'react';
import { Link } from 'react-router-dom';
import NavbarMain from '../../components/NavBarMain';

const Main = () => (
  <div>
    <NavbarMain />
    <p>Application Manager</p>
    <button><Link to="/roles">Roles</Link></button>
  </div>
);

export default Main;
