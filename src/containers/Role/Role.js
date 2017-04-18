import React from 'react';
import Gandalf from 'gandalf-validator';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.scss';

class Role extends Gandalf {
  constructor() {
    const fields = [
      {
        name: 'referenceNumber',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Reference No.',
          floatingLabelText: 'Reference No.',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'roleTitle',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Role Title',
          floatingLabelText: 'Role Title',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'hiringCompany',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Hiring Company',
          floatingLabelText: 'Hiring Company',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'description',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Description',
          floatingLabelText: 'Description',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'website',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Website',
          floatingLabelText: 'Website',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'notes',
        component: TextField,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Notes',
          floatingLabelText: 'Notes',
          style: {
            width: '100%',
          },
        },
        debounce: 500,
      },
      {
        name: 'datePosted',
        component: DatePicker,
        validators: ['required'],
        errorPropName: 'errorText',
        props: {
          hintText: 'Date Posted',
          floatingLabelText: 'Date Posted',
          textFieldStyle: {
            width: '100%',
          },
          container: 'inline',
          autoOk: true,
        },
        getValueInOnChange: (e, value) => value,
      },
    ];

    super(fields);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* "referenceNumber": "string",
  "title": "string",
  "company": "string",
  "description": "text",
  "locationId": {
    "name": "string"
  },
  "employmentTypeId": {
    "name": "string"
  },
  "website": "string",
  "contactId": {
    "firstName": "string",
    "lastName": "string",
    "telephoneNumber": "string",
    "emailAddress": "string"
  },
  "datePosted": "datetime",
  "dateApplied": "datetime",
  "notes": "string"*/

  // for cancel
  handleCancel(e) {
    e.preventDefault();

    this.props.history.push('/');
  }

  // for submit
  handleSubmit(e) {
    e.preventDefault();

    const data = this.getCleanFormData();

    if (!data) return;

    console.log(data);

    // this.props.onSignUpClick(data);
  }

  render() {
    const fields = this.state.fields;

    const style = {
      card: {
        width: '500px',
      },
    };

    return (
      <div className={styles.content}>
        <Card style={style.card} >
          <Paper>
            <Toolbar>
              <ToolbarTitle text={this.props.title} />
            </Toolbar>
            <CardText>
              <form>
                { fields.referenceNumber.element }
                { fields.roleTitle.element }
                { fields.hiringCompany.element }
                { fields.description.element }
                { fields.website.element }
                { fields.notes.element }
                { fields.datePosted.element }

                <FlatButton
                  onClick={this.handleCancel}
                  label="Cancel"
                />
                <RaisedButton
                  backgroundColor="rgb(183, 28, 28)"
                  labelColor="white"
                  onClick={this.handleSubmit}
                  label="Save"
                />
              </form>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

export default Role;
