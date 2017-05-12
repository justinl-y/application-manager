import React from 'react';
import PropTypes from 'prop-types';

import ProfileOptions from './ProfileOptions';

const ProfileOptionsContainer = props => (
  <ProfileOptions
    history={props.history}
    match={props.match}
  />
);

ProfileOptionsContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ProfileOptionsContainer;
