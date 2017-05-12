import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

import * as colors from 'material-ui/styles/colors';
import styles from './styles.scss';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      fields: {},
      fieldErrors: {},
      value: null,
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.addProfileToState(this.props.profile);
  }

  addProfileToState(profile) {
    this.setState({
      fields: {},
    });

    const fields = {
      firstName: profile.firstName,
      lastName: profile.lastName,
      emailAddress: profile.emailAddress,
      newPassword: '',
    };

    this.setState({
      fields,
    });
  }

  validate(data) {
    this.setState({
      fieldErrors: {},
    });

    const errors = {};
    // TODO date comparison
    // TODO validation errors into central source
    // TODO data formats

    if (!data.firstName) errors.firstName = 'Required field';
    if (!data.lastName) errors.lastName = 'Required field';
    if (!data.emailAddress) errors.emailAddress = 'Required field';

    return errors;
  }

  handleTextFieldChange(e, validation) {
    const fieldErrors = this.state.fieldErrors;
    delete fieldErrors[e.target.name];

    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;

    if (validation) {
      validation.forEach((type) => {
        switch (type) {
          case 'req':
            if (!fields[e.target.name]) {
              const errorObject = { [e.target.name]: 'Required field' };
              this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
            }
            break;
          case 'num':
            if (isNaN(fields[e.target.name])) {
              const errorObject = { [e.target.name]: 'Number required' };
              this.setState({ fieldErrors: { ...this.state.fieldErrors, ...errorObject } });
            }
            break;
          default:
        }
      });
    }

    this.setState({ fields });
  }

  // for cancel
  handleCancel() {
    this.props.history.push(`${this.props.match.url}`);
    // this.props.history.push('/');
  }

  // for sign-up
  handleSubmit() {
    const data = this.state.fields;
    const fieldErrors = this.validate(data);

    this.setState({ fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    console.log(data);

    this.props.updateProfile(data);
    this.props.history.push(`${this.props.match.url}`);
    // this.props.history.push('/');
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
              <ToolbarTitle text="Edit Profile" />
            </Toolbar>
            <CardText>
              <form>
                <TextField
                  style={style.textField}
                  name="firstName"
                  hintText="First Name"
                  errorText={this.state.fieldErrors.firstName}
                  floatingLabelText="First Name"
                  value={this.state.fields.firstName || ''}
                  onChange={e => this.handleTextFieldChange(e, ['req'])}
                />

                <TextField
                  style={style.textField}
                  name="lastName"
                  hintText="Last Name"
                  errorText={this.state.fieldErrors.lastName}
                  floatingLabelText="Last Name"
                  value={this.state.fields.lastName || ''}
                  onChange={e => this.handleTextFieldChange(e, ['req'])}
                />

                <TextField
                  style={style.textField}
                  name="emailAddress"
                  hintText="Email Address"
                  errorText={this.state.fieldErrors.emailAddress}
                  floatingLabelText="Email Address"
                  value={this.state.fields.emailAddress || ''}
                  onChange={e => this.handleTextFieldChange(e, ['req'])}
                />

                <TextField
                  style={style.textField}
                  name="newPassword"
                  hintText="New Password"
                  errorText={this.state.fieldErrors.newPassword}
                  floatingLabelText="New Password"
                  value={this.state.fields.newPassword || ''}
                  onChange={e => this.handleTextFieldChange(e)}
                />

                <TextField
                  style={style.textField}
                  name="confirmNewPassword"
                  hintText="Confirm New Password"
                  errorText={this.state.fieldErrors.confirmNewPassword}
                  floatingLabelText="Confirm New Password"
                  value={this.state.fields.confirmNewPassword || ''}
                  onChange={e => this.handleTextFieldChange(e)}
                />

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
                    label="Save"
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

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
};

export default Profile;
