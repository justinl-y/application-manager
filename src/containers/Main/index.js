import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Snackbar from 'material-ui/Snackbar';

import NavBarMain from '../../components/NavBarMain';
import RoleList from '../../containers/RoleList';
import RoleContainer from '../../containers/Role';
import NotFound from '../../components/NotFound';

import { clearMessageText } from '../../redux/modules/messageActions';

import styles from './styles.scss';

const style = {
  marginRight: 25,
  marginBottom: 25,
};

const newRole = () => {
  // history.push('/role/new');
};

class Main extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
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

        <Snackbar
          open={this.state.open}
          message={this.props.message.text === undefined ? '' : this.props.message.text}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

Main.defaultProps = {
  userSignedIn: false,
  message: PropTypes.object,
};

Main.propTypes = {
  userSignedIn: PropTypes.bool,
  message: PropTypes.object,
};

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = dispatch => ({
  clearMessageText: () => {
    dispatch(clearMessageText());
  },
});

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(Main);
