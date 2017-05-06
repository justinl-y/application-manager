import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import * as colors from 'material-ui/styles/colors';
import styles from './styles.scss';

class Role extends Component {
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
  "datePosted": "datetime",

  "contactId": {
    "firstName": "string",
    "lastName": "string",
    "telephoneNumber": "string",
    "emailAddress": "string"
  },

  "dateApplied": "datetime",
  "notes": "string"*/

  componentWillMount() {
    if (!this.props.isNew) {
      this.addRoleToState(this.props.role);
    }
  }

  addRoleToState(role) {
    console.log(role);

    this.setState({
      fields: {},
    });

    const fields = {};

    fields.id = role.id;
    fields.referenceNumber = role.referenceNumber;
    fields.roleTitle = role.roleTitle;
    fields.roleType = role.roleType;
    fields.hiringCompany = role.hiringCompany;
    fields.description = role.description;
    fields.website = role.website;
    // fields.datePosted = new Date(role.datePosted);
    // fields.dateApplied = new Date(role.dateApplied);
    fields.notes = role.notes;

    this.setState({ fields });
  }

  roleTypeItems() {
    const items = Object.entries(this.props.roleTypes).map(item => (
      <MenuItem
        key={Math.random() * Date.now()}
        value={item[0]}
        primaryText={item[1]}
      />
    ));

    return items;
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

  /* handleSelectFieldChange(e, i, v, validation) {
    console.log(e.target);

    const fieldErrors = this.state.fieldErrors;
    delete fieldErrors[e.target.name];

    const fields = this.state.fields;
    fields[e.target.name] = e.target.value;
  }*/

  validate(data) {
    this.setState({
      fieldErrors: {},
    });

    const errors = {};
    // TODO date comparison
    // TODO validation errors into central source
    // TODO data formats

    if (!data.roleTitle) errors.roleTitle = 'Required field';
    if (!data.hiringCompany) errors.hiringCompany = 'Required field';
    if (!data.description) errors.description = 'Required field';
    // if (!data.datePosted) errors.datePosted = 'Required field';

    return errors;
  }

  // for cancel
  handleCancel() {
    this.props.history.push(`${this.props.match.url}`);
  }

  // for submit
  handleSubmit() {
    const data = this.state.fields;
    const fieldErrors = this.validate(data);

    this.setState({ fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    // console.log(data);

    const roleData = {
      id: data.id,
      referenceNumber: data.referenceNumber,
      roleTitle: data.roleTitle,
      roleType: data.roleType,
      hiringCompany: data.hiringCompany,
      description: data.description,
      website: data.website,
      datePosted: data.datePosted.toString(),
      // fields.dateApplied = new Date(role.dateApplied);
      notes: data.notes,
    };

    // console.log(roleData);

    this.props.saveRole(roleData);
    this.props.history.push(`${this.props.match.url}`);
  }

  render() {
    const style = {
      card: {
        width: '500px',
      },
      textField: {
        width: '100%',
      },
      selectField: {
        width: '100%',
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
                <Tabs>
                  <Tab label="Role Details" >
                    <TextField
                      style={style.textField}
                      name="referenceNumber"
                      hintText="Reference Number"
                      errorText={this.state.fieldErrors.referenceNumber}
                      floatingLabelText="Reference Number"
                      value={this.state.fields.referenceNumber || ''}
                      onChange={e => this.handleTextFieldChange(e)}
                    />
                    <TextField
                      style={style.textField}
                      name="roleTitle"
                      hintText="Role Title"
                      errorText={this.state.fieldErrors.roleTitle}
                      floatingLabelText="Role Title"
                      value={this.state.fields.roleTitle || ''}
                      onChange={e => this.handleTextFieldChange(e, ['req'])}
                    />

                    <SelectField
                      style={style.selectField}
                      hintText="Role Type"
                      floatingLabelText="Role Type"
                      value={this.state.fields.roleType}
                      onChange={(e, i, v) => { this.setState({ fields: { ...this.state.fields, roleType: v } }); }}
                      // onChange={(e, i, v) => this.handleSelectFieldChange(e, i, v, ['req'])}
                    >
                      {this.roleTypeItems()}
                    </SelectField>

                    <TextField
                      style={style.textField}
                      name="hiringCompany"
                      hintText="Hiring Company"
                      errorText={this.state.fieldErrors.hiringCompany}
                      floatingLabelText="Hiring Company"
                      value={this.state.fields.hiringCompany || ''}
                      onChange={e => this.handleTextFieldChange(e, ['req'])}
                    />
                    <TextField
                      style={style.textField}
                      name="description"
                      hintText="Description"
                      errorText={this.state.fieldErrors.description}
                      floatingLabelText="Description"
                      value={this.state.fields.description || ''}
                      multiLine
                      rows={20}
                      onChange={e => this.handleTextFieldChange(e, ['req'])}
                    />

                    { /* location */ }

                    <TextField
                      style={style.textField}
                      name="website"
                      hintText="Website"
                      errorText={this.state.fieldErrors.website}
                      floatingLabelText="Website"
                      value={this.state.fields.website || ''}
                      onChange={e => this.handleTextFieldChange(e)}
                    />
                    <DatePicker
                      textFieldStyle={{ width: '100%' }}
                      floatingLabelText="Date Posted"
                      errorText={this.state.fieldErrors.datePosted}
                      hintText="Date Posted"
                      container="inline"
                      autoOk
                      value={this.state.fields.datePosted}
                      onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, datePosted: d } }); }}
                    />
                  </Tab>

                  <Tab label="Contact">
                    { /* contact */ }
                  </Tab>

                  <Tab label="History" >
                    <DatePicker
                      textFieldStyle={{ width: '100%' }}
                      floatingLabelText="Date Applied"
                      errorText={this.state.fieldErrors.dateApplied}
                      hintText="Date Applied"
                      container="inline"
                      autoOk
                      value={this.state.fields.dateApplied}
                      onChange={(x, d) => { this.setState({ fields: { ...this.state.fields, dateApplied: d } }); }}
                    />

                    <TextField
                      style={style.textField}
                      name="notes"
                      hintText="Notes"
                      errorText={this.state.fieldErrors.notes}
                      floatingLabelText="Notes"
                      value={this.state.fields.notes || ''}
                      multiLine
                      rows={20}
                      onChange={e => this.handleTextFieldChange(e)}
                    />
                  </Tab>
                </Tabs>
                <FlatButton
                  label="Cancel"
                  onClick={this.handleCancel}
                />
                <RaisedButton
                  backgroundColor={colors.cyan500}
                  labelColor={colors.white}
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

Role.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  roleTypes: PropTypes.object.isRequired,
  saveRole: PropTypes.func.isRequired,
  // unloadRole: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  role: PropTypes.object.isRequired,
};

export default Role;
