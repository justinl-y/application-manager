import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Roles from './Roles';
import { addRole, editRole, deleteRole } from '../../redux/modules/roleActions';
import { fetchRoles } from '../../redux/modules/rolesListActions';

class RolesContainer extends Component {
  constructor(props) {
    super(props);

    this.fetchRolesWithUserId = this.fetchRolesWithUserId.bind(this);
    this.deleteRoleWithUserId = this.deleteRoleWithUserId.bind(this);
  }

  componentWillMount() {
    this.fetchRolesWithUserId();
  }

  fetchRolesWithUserId() {
    const { userId } = this.props;
    this.props.fetchRoles(userId);
  }

  deleteRoleWithUserId(itemId) {
    const { userId } = this.props;

    this.props.deleteRole({ userId, itemId });
    this.fetchRolesWithUserId(userId);
  }

  render() {
    return (
      <Roles
        history={this.props.history}
        match={this.props.match}
        addRole={this.props.addRole}
        editRole={this.props.editRole}
        deleteRole={this.deleteRoleWithUserId}
        rolesList={this.props.rolesList}
      />
    );
  }
}

RolesContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  fetchRoles: PropTypes.func.isRequired,
  addRole: PropTypes.func.isRequired,
  editRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
  rolesList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  userId: state.user.authentication.uId,
  rolesList: state.rolesList,
});

const mapDispatchToProps = dispatch => ({
  fetchRoles: (userId) => {
    dispatch(fetchRoles(userId));
  },
  addRole: () => {
    dispatch(addRole());
  },
  editRole: (id) => {
    dispatch(editRole(id));
  },
  deleteRole: (data) => {
    dispatch(deleteRole(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesContainer);
