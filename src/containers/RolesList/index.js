import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import RoleList from '../../components/RoleList';
import RoleContainer from '../../containers/Role';

import { addRole } from '../../redux/modules/roleActions';

import styles from './styles.scss';

const style = {
  marginRight: 25,
  marginBottom: 25,
};

class RolesList extends Component {
  render() {
    return (
      <div>
        <RoleList />
      </div>
    );
  }
}

export default RolesList;


/*

newRole() {
    this.props.addRole();
  }
RolesList.propTypes = {
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
)(RolesList);

<div className={styles['add-role-container']}>
          <Link to="/roles/new">
            <FloatingActionButton style={style}>
              <ContentAdd onClick={this.newRole} />
            </FloatingActionButton>
          </Link>
        </div>

        <Route path="/roles/new" component={RoleContainer} />*/
