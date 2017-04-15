import React from 'react';
import Gandalf from 'gandalf-validator';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

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

    return (
      <div className={styles['sign-in']}>
        <Card style={{ width: '500px' }} >
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Sign-In" />
            </Toolbar>
            <CardText>
              <form>
                { fields.email.element }
                { fields.password.element }

                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  onClick={this.handleSignIn}
                  label="Sign-In"
                />
                <FlatButton
                  onClick={this.handleSignUp}
                  label="Sign-Up"
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

export default SignIn;
