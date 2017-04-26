import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import PrivateRoute from '../../components/PrivateRoute';
import Main from '../Main';
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';
import NotFound from '../../components/NotFound';

import RoleList from '../../components/RoleList';
import RoleContainer from '../../containers/Role';

import styles from './styles.scss';

const App = () => (
  <div className={styles.app}>
    <Switch>
      <PrivateRoute exact path="/" component={Main} />
      <Route path="/sign-in" component={SignInContainer} />
      <Route path="/sign-up" component={SignUpContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default withRouter(App);

/*


<LayoutWithRoute path="/role/new" component={RoleContainer} />
            <Route path="/role/:role" component={RoleContainer} />

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
