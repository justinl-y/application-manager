import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Roles from './Roles';
import { addRole, editRole } from '../../redux/modules/roleActions';
import { fetchRoles } from '../../redux/modules/rolesListActions';

class RolesContainer extends Component {
  componentWillMount() {
    this.props.fetchRoles();
  }

  newRole() {
    this.props.addRole();
  }

  render() {
    return (
      <div>
        <Roles
          history={this.props.history}
          addRole={this.props.addRole}
          editRole={this.props.editRole}
          match={this.props.match}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesContainer);
