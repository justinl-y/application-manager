import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Role from './Role';

const RoleContainer = props => (
  <Role
    title={props.title}
    history={props.history}
  />
);

RoleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
};

RoleContainer.defaultProps = {
  title: 'Add New Role',
  isNew: true,
};

const mapStateToProps = state => ({
  // userSignedIn: state.userAuthentication.signedIn.signIn,
});

const mapDispatchToProps = dispatch => ({
  /* signInUser: (data) => {
    dispatch(userSignIn(data));
  },*/
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleContainer);
