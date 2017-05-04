import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Role from './Role';
import { fetchRoleTypes } from '../../redux/modules/roleTypeActions';
import { insertRole, updateRole } from '../../redux/modules/roleActions';

class RoleContainer extends Component {
  componentWillMount() {
    this.props.fetchRoleTypes();
  }

  render() {
    return (
      <div>
        <Role
          title={this.props.isNew ? 'Add New Role' : 'Edit Role'}
          history={this.props.history}
          roleTypes={this.props.roleTypes}
          match={this.props.match}
          saveRole={this.props.isNew ? this.props.insertRole : this.props.updateRole}
        />
      </div>
    );
  }
}

RoleContainer.propTypes = {
  history: PropTypes.object.isRequired,
  roleTypes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchRoleTypes: PropTypes.func.isRequired,
  insertRole: PropTypes.func.isRequired,
  updateRole: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  roleTypes: state.roleTypes,
  isNew: state.role.isNew,
});

const mapDispatchToProps = dispatch => ({
  fetchRoleTypes: () => {
    dispatch(fetchRoleTypes());
  },
  insertRole: (role) => {
    dispatch(insertRole(role));
  },
  updateRole: (role) => {
    dispatch(updateRole(role));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleContainer);
