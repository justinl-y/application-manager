import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileDelete from './ProfileDelete';
import { deleteProfile } from '../../redux/modules/profileActions';

const RoleContainer = props => (
  <ProfileDelete
    history={props.history}
    match={props.match}
    deleteProfile={props.deleteProfile}
  />
);

RoleContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteProfile: () => {
    dispatch(deleteProfile());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(RoleContainer);
