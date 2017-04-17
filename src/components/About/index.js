import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch } from 'react-router-dom';

const Me = () => (<h2>Me</h2>);
const You = () => (<h2>You</h2>);
const Other = () => (<h2>Other</h2>);

const About = ({ match }) => (
  <div>
    <h1>About</h1>

    <Link to="/about/me">Me</Link>
    <Link to="/about/you">You</Link>
    <Link to="/about/other">Other</Link>

    {/* <Route
        path="/about/:subject"
        render={({ match }) => <h2>{match.params.subject}</h2>}
      />*/}

    {/* <Route path="/about/me" render={() => (<h2>Me</h2>)} />
      <Route path="/about/you" render={() => (<h2>You</h2>)} />
    <Route path="/about/other" render={() => (<h2>Other</h2>)} />*/}

    {/* <Switch>
      <Route path="/about/me" component={Me} />
      <Route path="/about/you" component={You} />
      <Route path="/about/other" component={Other} />
    </Switch>*/}

    <Switch>
      <Route path={`${match.url}/me`} component={Me} />
      <Route path={`${match.url}/you`} component={You} />
      <Route path={`${match.url}/other`} component={Other} />
    </Switch>
  </div>
  );

About.propTypes = {
  match: PropTypes.object.isRequired,
};

export default About;
