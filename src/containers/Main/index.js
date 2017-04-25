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

class Main extends Component {
  constructor() {
    super();

    this.newRole = this.newRole.bind(this);
  }

  newRole() {
    this.props.addRole();
  }

  render() {
    return (
      <div>
        <RoleList />

        <div className={styles['add-role-container']}>
          <Link to="/roles/new">
            <FloatingActionButton style={style}>
              <ContentAdd onClick={this.newRole} />
            </FloatingActionButton>
          </Link>
        </div>

        <Route path="/roles/new" component={RoleContainer} />
      </div>
    );
  }
}

Main.defaultProps = {
  userSignedIn: false,
};

Main.propTypes = {
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
)(Main);
