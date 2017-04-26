import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import NavBarMain from '../../components/NavBarMain';
import styles from './styles.scss';

const LayoutWithRoute = ({ ...rest, component }) => (
  <div className={styles.content}>
    <AppBar>
      <NavBarMain />
    </AppBar>
    <Route {...rest} component={props => React.createElement(component, props)} />
  </div>
);

export default LayoutWithRoute;
