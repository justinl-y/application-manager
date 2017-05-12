import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavbarMain from '../../components/NavBarMain';
import ProfileOptionsItems from '../../components/ProfileOptionsItems';
import ProfileContainer from '../Profile';

const Profile = ({ history, match }) => (
  <div>
    <NavbarMain />

    <Switch>
      <Route
        exact path={`${match.url}`}
        render={() => (
          <Redirect
            to={`${match.url}/options`}
          />
        )}
      />
      <Route
        path={`${match.url}/options`}
        component={() => (
          <ProfileOptionsItems match={match} />
        )}
      />
      <Route
        path={`${match.url}/edit`}
        component={() => (
          <ProfileContainer history={history} match={match} />
        )}
      />
    </Switch>
  </div>
);

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default Profile;
