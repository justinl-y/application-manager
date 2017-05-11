import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';
import IconButton from 'material-ui/IconButton';

import styles from './styles.scss';
import { userSignOut } from '../../redux/modules/authenticationActions';

const style = {
  headerButtons: {
    color: 'white',
  },
};

const NavBarMain = props => (
  <AppBar
    iconElementLeft={
      <div>
        <IconButton>
          <Link
            to="/"
          >
            <PlacesBusinessCenter
              style={style.headerButtons}
            />
          </Link>
        </IconButton>
      </div>
    }
    title="Application Manager"
  >
    <ul className={styles['nav-bar']}>
      <li><NavLink exact to="/" className={styles['nav-item']} activeClassName={styles.selected}>Home</NavLink></li>
      <li><NavLink to="/roles" className={styles['nav-item']} activeClassName={styles.selected}>Roles</NavLink></li>
      <li><NavLink to="/profile" className={styles['nav-item']} activeClassName={styles.selected}>Profile</NavLink></li>
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
