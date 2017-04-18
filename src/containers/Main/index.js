import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import NavBarMain from '../../components/NavBarMain';
import RoleList from '../../containers/RoleList';
import RoleContainer from '../../containers/Role';
import NotFound from '../../components/NotFound';

import styles from './styles.scss';

const style = {
  marginRight: 25,
  marginBottom: 25,
};

const newRole = () => {
  // history.push('/role/new');
};

const Main = () => (
  <div className={styles.content}>
    <AppBar>
      <NavBarMain />
    </AppBar>
    <div className={styles['add-role-container']}>
      <Link to="/role/new">
        <FloatingActionButton style={style}>
          <ContentAdd onClick={newRole} />
        </FloatingActionButton>
      </Link>
    </div>
    <Switch>
      <Route exact path="/" component={RoleList} />
      <Route path="/role/new" component={RoleContainer} />
      <Route path="/role/:role" component={RoleContainer} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

Main.defaultProps = {
  userSignedIn: false,
};

Main.propTypes = {
  userSignedIn: PropTypes.bool,
};

export default Main;
