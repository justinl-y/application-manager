import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Role from './Role';
import { fetchRoleTypes } from '../../redux/modules/roleTypeActions';

class RoleContainer extends Component {
  componentWillMount() {
    this.props.fetchRoleTypes();
  }

  render() {
    return (
      <Role
        title={this.props.title}
        history={this.props.history}
        roleTypes={this.props.roleTypes}
      />
    );
  }
}

RoleContainer.propTypes = {
  title: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  fetchRoleTypes: PropTypes.func.isRequired,
  roleTypes: PropTypes.object.isRequired,
};

RoleContainer.defaultProps = {
  title: 'Add New Role',
  isNew: true,
};

const mapStateToProps = state => ({
  roleTypes: state.roleTypes,
});

const mapDispatchToProps = dispatch => ({
  fetchRoleTypes: () => {
    dispatch(fetchRoleTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoleContainer);
