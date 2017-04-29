import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Roles from './Roles';
import { addRole } from '../../redux/modules/roleActions';

class RolesContainer extends Component {
  newRole() {
    this.props.addRole();
  }

  render() {
    return (
      <div>
        <Roles addRole={this.props.addRole} />
      </div>
    );
  }
}

RolesContainer.propTypes = {
  addRole: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addRole: () => {
    dispatch(addRole());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(RolesContainer);
