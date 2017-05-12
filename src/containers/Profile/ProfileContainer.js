import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Profile from './Profile';

import { updateProfile } from '../../redux/modules/profileActions';

const ProfileContainer = props => (
  <Profile
    history={props.history}
    match={props.match}
    profile={props.profile}
    updateProfile={props.updateProfile}
  />
);

ProfileContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.user.profile,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: () => {
    dispatch(updateProfile());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileContainer);
