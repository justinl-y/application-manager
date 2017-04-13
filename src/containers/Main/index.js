import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// import { userSignOut } from '../../redux/modules/authenticationActions';
// import styles from './styles.scss';

class Main extends Component {
  constructor({ props }) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if (!(this.props.userSignedIn || this.props.userSignedUp)) {
      this.props.history.push('/sign-in');
    }
  }

  render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Switch />
        </div>
      </BrowserRouter>
    );
  }
}

Main.defaultProps = {
  userSignedIn: false,
  userSignedUp: false,
};

Main.propTypes = {
  history: PropTypes.object.isRequired,
  userSignedIn: PropTypes.bool,
  userSignedUp: PropTypes.bool,
  // signOutUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  userSignedIn: state.userAuthentication.signedIn.signIn,
  userSignedUp: state.userAuthentication.signedIn.signUp,
});

/* const mapDispatchToProps = dispatch => ({
  signOutUser: () => {
    dispatch(userSignOut());
  },
});*/

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(Main);
