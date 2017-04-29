import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavbarMain from '../../components/NavBarMain';
import RoleList from '../../components/RoleList';
import RoleContainer from '../../containers/Role';

import styles from './styles.scss';

const style = {
  marginRight: 25,
  marginBottom: 25,
};

const Roles = ({ addRole }) => (
  <div>
    <NavbarMain />

    <div className={styles['add-role-container']}>
      <Link to="/roles/new">
        <FloatingActionButton style={style}>
          <ContentAdd onClick={addRole} />
        </FloatingActionButton>
      </Link>
    </div>

    <Switch>
      <Route
        exact path="/roles" render={() => (
          <Redirect
            to="/roles/list"
          />)}
      />
      <Route path="/roles/list" component={RoleList} />
      <Route path="/roles/new" component={RoleContainer} />
      <Route path="/role/:role" component={RoleContainer} />
    </Switch>
  </div>
);

Roles.propTypes = {
  addRole: PropTypes.func.isRequired,
};

export default Roles;
