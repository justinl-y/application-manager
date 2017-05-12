import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardText } from 'material-ui/Card';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import * as colors from 'material-ui/styles/colors';
import styles from './styles.scss';

class ProfileDelete extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      fieldErrors: {},
      value: null,
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCancel() {
    this.props.history.push(`${this.props.match.url}`);
  }

  handleDelete() {
    this.props.deleteProfile();
    this.props.history.push('/sign-in');
  }

  render() {
    const style = {
      card: {
        width: '500px',
      },
      textField: {
        width: '100%',
      },
      button: {
        width: '100px',
        marginLeft: '20px',
      },
    };

    return (
      <div className={styles.content}>
        <Card style={style.card} >
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Delete Profile" />
            </Toolbar>
            <CardText>
              <p>Do you want to delete your profile?</p>
              <div className={styles['form-buttons']}>
                <FlatButton
                  onTouchTap={this.handleCancel}
                  label="Cancel"
                  style={style.button}
                />
                <RaisedButton
                  backgroundColor={colors.blue400}
                  labelColor={colors.white}
                  onTouchTap={this.handleDelete}
                  label="Delete"
                  style={style.button}
                />
              </div>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

ProfileDelete.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  deleteProfile: PropTypes.func.isRequired,
};

export default ProfileDelete;
