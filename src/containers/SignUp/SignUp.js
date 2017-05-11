import React from 'react';
import Gandalf from 'gandalf-validator';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import * as colors from 'material-ui/styles/colors';
import styles from './styles.scss';

class SignUp extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'firstName',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'First Name',
          floatingLabelText: 'First Name',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'lastName',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Last Name',
          floatingLabelText: 'Last Name',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'email',
        component: TextField,
        validators: ['required', 'email'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Email',
          floatingLabelText: 'Email',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'password',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Password',
          floatingLabelText: 'Password',
          style: {
            width: '100%',
          },
          type: 'password',
        },
      },
    ];

    super(fields);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userSignedUp) {
      this.props.history.push('/');
    }
  }

  // for cancel
  handleCancel(e) {
    e.preventDefault();

    this.props.history.push('/sign-in');
  }

  // for sign-up
  handleSignUp(e) {
    e.preventDefault();

    const data = this.getCleanFormData();

    if (!data) return;

    this.props.onSignUpClick(data);
  }

  render() {
    const fields = this.state.fields;

    const style = {
      card: {
        width: '500px',
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
              <ToolbarTitle text="Sign-Up" />
            </Toolbar>
            <CardText>
              <form>
                { fields.firstName.element }
                { fields.lastName.element }
                { fields.email.element }
                { fields.password.element }

                <div className={styles['form-buttons']}>
                  <FlatButton
                    onTouchTap={this.handleCancel}
                    label="Cancel"
                    style={style.button}
                  />
                  <RaisedButton
                    backgroundColor={colors.blue400}
                    labelColor={colors.white}
                    onTouchTap={this.handleSignUp}
                    label="Sign-Up"
                    style={style.button}
                  />
                </div>
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

export default SignUp;
