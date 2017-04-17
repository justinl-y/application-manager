import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';

import NavBarMain from '../../components/NavBarMain';
import Home from '../../components/Home';
import About from '../../components/About';
import NotFound from '../../components/NotFound';

import styles from './styles.scss';

const Main = () => (
  <div className={styles.main}>
    <AppBar />
    <NavBarMain />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </div>
  );

Main.defaultProps = {
  userSignedIn: false,
};

Main.propTypes = {
  userSignedIn: PropTypes.bool,
};

export default Main;
