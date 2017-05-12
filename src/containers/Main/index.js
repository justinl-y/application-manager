import React from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import NavbarMain from '../../components/NavBarMain';
import styles from './styles.scss';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

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
/*

<GridList style={style.gridList} cols={2.2}>
      <GridTile
        key={1}
        title="Role List"
        // actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
        titleStyle={style.titleStyle}
        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
      />
    </GridList>
<div>

    <p>Application Manager</p>
    <button><Link to="/roles">Roles</Link></button>
  </div>;
*/
