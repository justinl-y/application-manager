import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';
import Main from '../Main';

import styles from './styles.scss';

const App = (props) => {
  const { userSignedIn } = props;

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <div>
          {/* <Route render={() => (userSignedIn ? <Main userSignedIn={userSignedIn} /> : <Redirect to="/sign-in" />)} />*/}
          <Route render={() => <Main />} />
          <Route path="/sign-in" component={SignInContainer} />
          <Route path="/sign-up" component={SignUpContainer} />
        </div>
      </BrowserRouter>
    </div>
  );
};

App.defaultProps = {
  userSignedIn: false,
};

App.propTypes = {
  userSignedIn: PropTypes.bool,
};

const mapStateToProps = state => ({
  userSignedIn: state.userAuthentication.signedIn.signIn,
});

export default connect(
  mapStateToProps,
)(App);


/*
<Route render={() => <Main />} />
*/


/* // alternaive sign-in logic
<Route render={() => (userSignedIn ? <Redirect to="/" /> : <SignInContainer />)} />
*/

/*
// alternative security for <About> component
<Route
  path="/about"
  component={() => (userSignedIn ? <About /> : <Redirect to="/sign-in"
/>)}
/>
*/

/*
<Route exact path="/" component={Home} />

<div>
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
</div>
/*

<div>
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/sign-in" component={SignInContainer} />
    <Route path="/sign-up" component={SignUpContainer} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
</div
*/

/*


      <BrowserRouter history={history}>
        <div>
          { userSignedIn && <NavBarMain /> }
          <Switch>
            <Route
              exact path="/"
              component={() => (userSignedIn ? <Home /> : <Redirect to="/sign-in" />)}
            />
            <Route path="/about" component={About} />
            <Route path="/sign-in" component={SignInContainer} />
            <Route path="/sign-up" component={SignUpContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>

*/
