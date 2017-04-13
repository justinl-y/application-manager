import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Main from '../../containers/Main';
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';
import NotFound from '../../components/NotFound';

import Home from '../../components/Home';
import About from '../../components/About';

import styles from './styles.scss';

const history = createHistory();

const App = () => (
  <div className={styles.app}>
    <BrowserRouter history={history}>
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
    </BrowserRouter>
  </div>
);

export default App;

/*
, Link
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
</ul>

<hr />
*/
