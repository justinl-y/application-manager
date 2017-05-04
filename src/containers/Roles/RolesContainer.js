import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Roles from './Roles';
import { addRole } from '../../redux/modules/roleActions';
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
          addRole={this.props.addRole}
          match={this.props.match}
          rolesList={this.props.rolesList}
        />
      </div>
    );
  }
}

RolesContainer.propTypes = {
  addRole: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  fetchRoles: PropTypes.func.isRequired,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RolesContainer);
