import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

import styles from './styles.scss';

class RolesList extends Component {
  editRole(roleId) {
    this.props.editRole(roleId);
    this.props.history.push(`${this.props.match.url}/${roleId}`);
  }

  deleteRole(roleId) {
    this.props.deleteRole(roleId);
  }

  render() {
    const style = {
      card: {
        width: '1000px',
      },
    };

    return (
      <div className={styles.content}>
        <Card style={style.card}>
          <Paper>
            <Toolbar>
              <ToolbarTitle text="Roles Applied" />
            </Toolbar>
            <CardText>
              <Table selectable={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                  <TableRow>
                    <TableHeaderColumn>Date Posted</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Company</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody stripedRows displayRowCheckbox={false}>
                  {
                    Object.entries(this.props.rolesList)
                      .sort((a, b) => b[1].datePosted - a[1].datePosted)
                      .map(role => (
                        <TableRow key={role[0]}>
                          <TableRowColumn>{Moment(role[1].datePosted).format('YYYY-MM-DD')}</TableRowColumn>
                          <TableRowColumn>{role[1].roleTitle}</TableRowColumn>
                          <TableRowColumn>{role[1].hiringCompany}</TableRowColumn>
                          <TableRowColumn>
                            <FlatButton
                              label="Edit"
                              onClick={() => this.editRole(role[0])}
                            />
                          </TableRowColumn>
                          <TableRowColumn>
                            <FlatButton
                              label="Delete"
                              onClick={() => this.deleteRole(role[0])}
                            />
                          </TableRowColumn>
                        </TableRow>
                      ))
                  }
                </TableBody>
              </Table>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

RolesList.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  rolesList: PropTypes.object.isRequired,
  editRole: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
};

export default RolesList;
