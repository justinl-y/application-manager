import React from 'react';
import NavbarMain from '../../components/NavBarMain';
import styles from './styles.scss';

const Main = () => (
  <div>
    <NavbarMain />
    <div className={styles.content}>
      <h2>Dashboard</h2>
      <div className={styles['button-container']}>
        <p>Dashboard items here</p>
      </div>
    </div>
  </div>
);

export default Main;
