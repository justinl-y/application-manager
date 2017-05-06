import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Role from './Role';
import { fetchRoleTypes } from '../../redux/modules/roleTypeActions';
import { fetchRole, insertRole, updateRole, unloadRole } from '../../redux/modules/roleActions';

class RoleContainer extends Component {
  componentWillMount() {
    if (!this.props.isNew) {
      this.props.fetchRole(this.props.roleId);
    }

    this.props.fetchRoleTypes();
  }

  componentWillUnmount() {
    // console.log('unmount');
    // this.props.unloadRole();
  }

  render() {
    return (
      <div>
        <Role
          history={this.props.history}
          match={this.props.match}
          isNew={this.props.isNew}
          title={this.props.isNew ? 'Add New Role' : 'Edit Role'}
          roleTypes={this.props.roleTypes}
          role={this.props.role}
          saveRole={this.props.isNew ? this.props.insertRole : this.props.updateRole}
          // unloadRole={this.props.unloadRole}
        />
      </div>
    );
  }
}

RoleContainer.defaultProps = {
  isNew: true,
};

RoleContainer.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchRoleTypes: PropTypes.func.isRequired,
  fetchRole: PropTypes.func.isRequired,
  insertRole: PropTypes.func.isRequired,
  updateRole: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  roleTypes: PropTypes.object.isRequired,
  roleId: PropTypes.string.isRequired,
  role: PropTypes.object.isRequired,
  unloadRole: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isNew: state.role.isNew,
  roleTypes: state.roleTypes,
  roleId: state.role.id,
  role: state.role,
});

const mapDispatchToProps = dispatch => ({
  fetchRoleTypes: () => {
    dispatch(fetchRoleTypes());
  },
  fetchRole: (id) => {
    dispatch(fetchRole(id));
  },
  insertRole: (role) => {
    dispatch(insertRole(role));
  },
  updateRole: (role) => {
    dispatch(updateRole(role));
  },
  unloadRole: () => {
    dispatch(unloadRole());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleContainer);
