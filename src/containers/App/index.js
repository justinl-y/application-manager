import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../../components/Home';
import About from '../../components/About';
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';

const history = createHistory();

const App = () => (
  <BrowserRouter history={history}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sign-in" component={SignInContainer} />
      <Route path="/sign-up" component={SignUpContainer} />
    </div>
  </BrowserRouter>
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
