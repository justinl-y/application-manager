import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import Main from '../Main';
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';
import RolesContainer from '../Roles';
import NotFound from '../../components/NotFound';

import styles from './styles.scss';

const App = () => (
  <div className={styles.app}>
    <Switch>
      <PrivateRoute exact path="/" component={Main} />
      <Route path="/sign-in" component={SignInContainer} />
      <Route path="/sign-up" component={SignUpContainer} />
      <PrivateRoute path="/roles" component={RolesContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default withRouter(App);
