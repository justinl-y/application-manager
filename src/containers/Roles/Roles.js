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

const Roles = ({ match, addRole }) => (
  <div>
    <NavbarMain />

    <div className={styles['add-role-container']}>
      <Link to={`${match.url}/new`}>
        <FloatingActionButton style={style}>
          <ContentAdd onClick={addRole} />
        </FloatingActionButton>
      </Link>
    </div>

    <Switch>
      <Route
        exact path={`${match.url}`} render={() => (
          <Redirect
            to={`${match.url}/list`}
          />)}
      />
      <Route path={`${match.url}/list`} component={RoleList} />
      <Route path={`${match.url}/new`} component={RoleContainer} />
      <Route path={`${match.url}/:roleId`} component={RoleContainer} />
    </Switch>
  </div>
);

Roles.propTypes = {
  addRole: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default Roles;
