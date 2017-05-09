import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Roles from './Roles';
import { addRole, editRole, deleteRole } from '../../redux/modules/roleActions';
import { fetchRoles } from '../../redux/modules/rolesListActions';

class RolesContainer extends Component {
  constructor(props) {
    super(props);

    this.proccessDeleteRole = this.proccessDeleteRole.bind(this);
  }

  componentWillMount() {
    this.props.fetchRoles();
  }

  newRole() {
    this.props.addRole();
  }

  proccessDeleteRole(id) {
    this.props.deleteRole(id);
    this.props.fetchRoles();
  }

  render() {
    return (
      <div>
        <Roles
          history={this.props.history}
          match={this.props.match}
          addRole={this.props.addRole}
          editRole={this.props.editRole}
          deleteRole={this.proccessDeleteRole}
          rolesList={this.props.rolesList}
        />
      </div>
    );
  }
}

RolesContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchRoles: PropTypes.func.isRequired,
  addRole: PropTypes.func.isRequired,
  editRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
  rolesList: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  rolesList: state.rolesList,
});

const mapDispatchToProps = dispatch => ({
  fetchRoles: () => {
    dispatch(fetchRoles());
  },
  addRole: () => {
    dispatch(addRole());
  },
  editRole: (id) => {
    dispatch(editRole(id));
  },
  deleteRole: (id) => {
    dispatch(deleteRole(id));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesContainer);
