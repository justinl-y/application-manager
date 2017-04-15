import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Home from '../../components/Home';
import About from '../../components/About';
import NotFound from '../../components/NotFound';

// import { userSignOut } from '../../redux/modules/authenticationActions';
// import styles from './styles.scss';

class Main extends Component {
  constructor() {
    super();

    // this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    /* if (!(this.props.userSignedIn && this.props.userSignedUp)) {
      this.props.history.push('/sign-in');
    }*/
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
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
