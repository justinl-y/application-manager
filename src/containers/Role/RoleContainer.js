import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../../components/Loading';
import Role from './Role';
import { fetchRoleTypes } from '../../redux/modules/roleTypeActions';
import { unloadRole, fetchRole, insertRole, updateRole } from '../../redux/modules/roleActions';
import { fetchLocations } from '../../redux/modules/locationActions';

class RoleContainer extends Component {
  constructor(props) {
    super(props);

    this.insertRoleWithUserId = this.insertRoleWithUserId.bind(this);
    this.updateRoleWithUserId = this.updateRoleWithUserId.bind(this);
  }

  componentDidMount() {
    if (!this.props.isNew) {
      this.fetchRoleWithUserId(this.props.roleId);
    }

    this.props.fetchRoleTypes();
    this.props.fetchLocations();
  }

  fetchRoleWithUserId(itemId) {
    const { userId } = this.props;
    this.props.fetchRole({ userId, itemId });
  }

  insertRoleWithUserId(item) {
    const { userId } = this.props;
    this.props.insertRole({ ...item, userId });
  }

  updateRoleWithUserId(item) {
    const { userId } = this.props;
    this.props.updateRole({ ...item, userId });
  }

  render() {
    const isLoading = this.props.isLoading;

    return (
      <div>
        {
          isLoading ?
            <Loading />
          :
            <Role
              history={this.props.history}
              match={this.props.match}
              isNew={this.props.isNew}
              roleTypes={this.props.roleTypes}
              locations={this.props.locations}
              role={this.props.role}
              saveRole={this.props.isNew ? this.insertRoleWithUserId : this.updateRoleWithUserId}
              unloadRole={this.props.unloadRole}
            />
        }
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
  fetchLocations: PropTypes.func.isRequired,
  locations: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  unloadRole: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isNew: state.role.isNew,
  userId: state.user.authentication.uId,
  roleId: state.role.id,
  role: state.role,
  roleTypes: state.roleTypes,
  locations: state.locations,
  isLoading: state.isLoading,
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
  fetchLocations: () => {
    dispatch(fetchLocations());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleContainer);
