import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userSignOut } from '../../redux/modules/authenticationActions';

class Home extends Component {
  constructor({ props }) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (!(this.props.userSignedIn || this.props.userSignedUp)) {
      this.props.history.push('/sign-in');
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/about');
  }

  handleSignOut(e) {
    e.preventDefault();

    this.props.signOutUser();

    this.props.history.push('/sign-in');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={e => this.handleClick(e)}>About</button>
        <button onClick={e => this.handleSignOut(e)}>Sign Out</button>
      </div>
    );
  }
}

Home.defaultProps = {
  userSignedIn: false,
  userSignedUp: false,
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
  userSignedIn: PropTypes.bool,
  userSignedUp: PropTypes.bool,
  signOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userSignedIn: state.userAuthentication.signedIn.signIn,
  userSignedUp: state.userAuthentication.signedIn.signUp,
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => {
    dispatch(userSignOut());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
