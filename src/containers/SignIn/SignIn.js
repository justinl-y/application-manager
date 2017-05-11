import React from 'react';
import Gandalf from 'gandalf-validator';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import * as colors from 'material-ui/styles/colors';
import styles from './styles.scss';

class SignIn extends Gandalf {
  constructor() {
    const fields = [
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

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.userSignedIn) {
      this.props.history.push('/');
    }
  }

  // for sign-in
  handleSignIn(e) {
    e.preventDefault();

    const data = this.getCleanFormData();

    if (!data) return;

    this.props.onSignUpClick(data);
  }

  // for sign-up
  handleSignUp(e) {
    e.preventDefault();

    this.props.history.push('/sign-up');
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
              <ToolbarTitle text="Sign-In" />
            </Toolbar>
            <CardText>
              <form>
                { fields.email.element }
                { fields.password.element }
                <div className={styles['form-buttons']}>
                  <FlatButton
                    onTouchTap={this.handleSignUp}
                    label="Sign-Up"
                    style={style.button}
                  />
                  <RaisedButton
                    backgroundColor={colors.blue400}
                    labelColor={colors.white}
                    onTouchTap={this.handleSignIn}
                    label="Sign-In"
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

export default (SignIn);
