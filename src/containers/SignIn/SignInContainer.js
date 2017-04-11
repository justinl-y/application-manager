import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { userSignIn } from '../../redux/modules/authenticationActions';

class SignInContainer extends Component {
  render() {
    return (
      <SignIn
        onSignUpClick={this.props.signInUser}
        userSignedIn={this.props.userSignedIn}
        history={this.props.history}
      />
    );
  }
}

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


/* import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import SignIn from './SignIn';
// import SignUp from '../../components/SignUp';
// import { userVerifyLogin, userSignUp, registerUser } from './actions';

class SignInContainer extends Component {
  componentWillUpdate() {
    if (!this.props.userLoggedIn) {
      browserHistory.push('/');
    }
  }

  render() {
    const { userToSignUp } = this.props;

    return (
      <div>
        {
          !userToSignUp ?
            <Login
              onLoginClick={this.props.verifyLogin}
              onSignUpClick={this.props.signUpUser}
            />
          :
            <SignUp
              onSignUpLoginClick={this.props.signUpLogin}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLoggedIn: state.appData.processLogin.login,
  userToSignUp: state.appData.processLogin.signup,
});

const mapDispatchToProps = dispatch => ({
  verifyLogin: (login) => {
    dispatch(userVerifyLogin(login));
  },
  signUpUser: () => {
    dispatch(userSignUp());
  },
  signUpLogin: (register) => {
    dispatch(registerUser(register));
  },
});

SignInContainer.propTypes = {
  userToSignUp: PropTypes.bool.isRequired,
  verifyLogin: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired,
  signUpLogin: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInContainer);*/
