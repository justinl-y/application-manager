/* eslint-disable no-unused-expressions */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ userSignedIn, ...rest, component }) => (
  <Route {...rest} component={props => (userSignedIn ? React.createElement(component, props) : <Redirect to="/sign-in" />)} />
);

PrivateRoute.defaultProps = {
  userSignedIn: false,
};

PrivateRoute.propTypes = {
  userSignedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  userSignedIn: state.userAuthentication.signedIn.signIn,
});

export default connect(
  mapStateToProps,
)(PrivateRoute);
