import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import styles from './styles.scss';
import { userSignOut } from '../../redux/modules/authenticationActions';

const NavBarMain = props => (
  <AppBar>
    <ul className={styles['nav-bar']}>
      <li><NavLink exact to="/" className={styles['nav-item']} activeClassName={styles.selected}>Home</NavLink></li>
      <li><NavLink to="/roles" className={styles['nav-item']} activeClassName={styles.selected}>Roles</NavLink></li>
      <li><NavLink exact to="/sign-in" onClick={props.userSignOut} className={styles['nav-item']}>Sign Out</NavLink></li>
    </ul>
  </AppBar>
);

const mapDispatchToProps = dispatch => ({
  userSignOut: () => {
    dispatch(userSignOut());
  },
});

NavBarMain.propTypes = {
  userSignOut: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(NavBarMain);
