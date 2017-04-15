import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import { userSignUp } from '../../redux/modules/authenticationActions';

const SignUpContainer = props => (
  <SignUp
    onSignUpClick={props.signUpUser}
    userSignedUp={props.userSignedUp}
    history={props.history}
  />
);

SignUpContainer.propTypes = {
  signUpUser: PropTypes.func.isRequired,
  userSignedUp: PropTypes.bool,
  history: PropTypes.object.isRequired,
};

SignUpContainer.defaultProps = {
  userSignedUp: false,
};

const mapStateToProps = state => ({
  userSignedUp: state.userAuthentication.signedIn.signUp,
});

const mapDispatchToProps = dispatch => ({
  signUpUser: (data) => {
    dispatch(userSignUp(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpContainer);
