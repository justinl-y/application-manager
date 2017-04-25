import React from 'react';
import { Route } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import NavBarMain from '../../components/NavBarMain';
import styles from './styles.scss';

const RouteWithLayout = ({ ...rest, component }) => (
  <div className={styles.content}>
    <AppBar>
      <NavBarMain />
    </AppBar>
    <Route {...rest} render={props => React.createElement(component, props)} />
  </div>
);

export default RouteWithLayout;

/*
<Footer />

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => (
    client.isLoggedIn() ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
      }} />
    )
  )} />
);

*/
