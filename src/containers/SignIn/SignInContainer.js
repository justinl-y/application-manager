import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { userSignIn } from '../../redux/modules/authenticationActions';

const SignInContainer = props => (
  <SignIn
    onSignUpClick={props.signInUser}
    userSignedIn={props.userSignedIn}
    history={props.history}
  />
);

SignInContainer.propTypes = {
  signInUser: PropTypes.func.isRequired,
  userSignedIn: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

SignInContainer.defaultProps = {
  userSignedIn: false,
};

const mapStateToProps = state => ({
  userSignedIn: state.userAuthentication.signedIn.signIn,
});

const mapDispatchToProps = dispatch => ({
  signInUser: (data) => {
    dispatch(userSignIn(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);
