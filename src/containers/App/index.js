import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import Main from '../../containers/Main';
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';
import Home from '../../components/Home';
import About from '../../components/About';
import NotFound from '../../components/NotFound';
import styles from './styles.scss';

const history = createHistory();

const App = (props) => {
  const { userSignedIn } = props;

  return (
    <div className={styles.app}>
      <BrowserRouter history={history}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Switch>
            <Route
              exact path="/"
              component={() => (userSignedIn ? <Home /> : <Redirect to="/sign-in" />)}
            />
            <Route
              path="/about"
              component={() => (userSignedIn ? <About /> : <Redirect to="/sign-in" />)}
            />
            {/* <Route path="/about" component={About} />*/}
            <Route path="/sign-in" component={SignInContainer} />
            <Route path="/sign-up" component={SignUpContainer} />
            <Route component={NotFound} />
          </Switch>
          {/* <Route exact path="/" component={Main} />*/}
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
  // mapDispatchToProps,
)(App);

/*

<Route exact path="/" component={Home} />

      <div>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>


<div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/sign-in" component={SignInContainer} />
          <Route path="/sign-up" component={SignUpContainer} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>

, Link
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>

<hr />
*/
