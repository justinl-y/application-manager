import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavbarMain from '../../components/NavBarMain';
import RolesList from '../../components/RolesList';
import RoleContainer from '../../containers/Role';

import styles from './styles.scss';

const style = {
  marginRight: 25,
  marginBottom: 25,
};

const Roles = ({ history, match, rolesList, addRole, editRole, deleteRole }) => (
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
        exact path={`${match.url}`}
        render={() => (
          <Redirect
            to={`${match.url}/list`}
          />
        )}
      />
      <Route
        path={`${match.url}/list`}
        component={() => (
          <RolesList
            history={history}
            match={match}
            rolesList={rolesList}
            editRole={editRole}
            deleteRole={deleteRole}
          />
        )}
      />
      <Route
        path={`${match.url}/new`}
        component={() => (
          <RoleContainer history={history} match={match} />
        )}
      />
      <Route
        path={`${match.url}/:roleId`}
        component={() => (
          <RoleContainer history={history} match={match} />
        )}
      />
    </Switch>
  </div>
);

Roles.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  rolesList: PropTypes.object.isRequired,
  addRole: PropTypes.func.isRequired,
  editRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
};

export default Roles;
