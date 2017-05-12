import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.scss';

const style = {
  link: {
    textDecoration: 'none',
  },
};

const ProfileOptionsItems = ({ match }) => (
  <div className={styles.content}>
    <h2>User Profile</h2>
    <div className={styles['button-container']}>
      <Link style={style.link} to={`${match.url}/edit`}><div className={styles.button}>Edit</div></Link>
      <Link style={style.link} to={`${match.url}/delete`}><div className={styles.button}>Delete</div></Link>
    </div>
  </div>
);

ProfileOptionsItems.propTypes = {
  match: PropTypes.object.isRequired,
};

export default ProfileOptionsItems;
