import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-downward';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-upward';

import DialogModalAlert from '../../components/DialogModalAlert';

import styles from './styles.scss';

class RolesList extends Component {
  constructor() {
    super();

    this.state = {
      dialogOpen: false,
      roleId: null,
      sortAscending: true,
      dateAppliedSortAscending: false,
      roleTitleSortAscending: false,
      columnName: 'datePosted',
    };

    this.deleteRole = this.deleteRole.bind(this);
  }

  editRole(roleId) {
    this.props.editRole(roleId);
    this.props.history.push(`${this.props.match.url}/${roleId}`);
  }

  deleteRole(roleId) {
    this.setState({ dialogOpen: true, roleId });
  }

  sortDateApplied(columnName) {
    this.setState({
      dateAppliedSortAscending: !this.state.dateAppliedSortAscending,
      sortAscending: this.state.dateAppliedSortAscending,
      columnName,
    });
  }

  sortRoleTitle(columnName) {
    this.setState({
      roleTitleSortAscending: !this.state.roleTitleSortAscending,
      sortAscending: this.state.roleTitleSortAscending,
      columnName,
    });
  }

  sortData(a, b) {
    const sortableColumn = this.state.columnName;

    if (this.state.sortAscending) {
      return a[1][sortableColumn].toString() < b[1][sortableColumn].toString();
    }
    return b[1][sortableColumn].toString() < a[1][sortableColumn].toString();
  }

  render() {
    const style = {
      card: {
        width: '1000px',
      },
      columnTitleNarrow: {
        width: '135px',
      },
      columnNarrow: {
        width: '150px',
      },
      columnTitleStandard: {
        width: '235px',
      },
      columnStandard: {
        width: '250px',
      },
      columnlarge: {
        width: '350px',
      },
      columnButton: {
        marginLeft: '10px',
      },
      size: {
        height: '12px',
        width: '12px',
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
                    <TableHeaderColumn
                      onTouchTap={() => this.sortDateApplied('datePosted')}
                      style={style.columnNarrow}
                    >
                      <div className={styles['column-titles']}>
                        <div className={styles['sort-arrows']}>
                          {
                            this.state.dateAppliedSortAscending ?
                              <ArrowUp style={style.size} /> :
                              <ArrowDown style={style.size} />
                          }
                        </div>
                        Date Posted
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn
                      onTouchTap={() => this.sortRoleTitle('roleTitle')}
                      style={style.columnStandard}
                    >
                      <div className={styles['column-titles']}>
                        <div className={styles['sort-arrows']}>
                          {
                            this.state.roleTitleSortAscending ?
                              <ArrowUp style={style.size} /> :
                              <ArrowDown style={style.size} />
                          }
                        </div>
                        Title
                      </div>
                    </TableHeaderColumn>
                    <TableHeaderColumn style={style.columnTitleStandard}>Company</TableHeaderColumn>
                    <TableHeaderColumn style={style.columnlarge} />
                  </TableRow>
                </TableHeader>
                <TableBody stripedRows displayRowCheckbox={false}>
                  {
                    Object.entries(this.props.rolesList)
                      .sort((a, b) => this.sortData(a, b))
                      .map(role => (
                        <TableRow key={role[0]}>
                          <TableRowColumn style={style.columnNarrow}>{Moment(role[1].datePosted).format('YYYY-MM-DD')}</TableRowColumn>
                          <TableRowColumn style={style.columnStandard}>{role[1].roleTitle}</TableRowColumn>
                          <TableRowColumn style={style.columnStandard}>{role[1].hiringCompany}</TableRowColumn>
                          <TableRowColumn style={style.columnLarge}>
                            <div className={styles['button-container']}>
                              <FlatButton
                                label="Edit"
                                onTouchTap={() => this.editRole(role[0])}
                                style={style.columnButton}
                              />
                              <FlatButton
                                label="Delete"
                                onTouchTap={() => this.deleteRole(role[0])}
                                style={style.columnButton}
                              />
                            </div>
                          </TableRowColumn>
                        </TableRow>
                      ))
                  }
                </TableBody>
              </Table>
            </CardText>
          </Paper>
        </Card>

        <DialogModalAlert
          open={this.state.dialogOpen}
          title="Delete"
          message="Delete role?"
          action={this.props.deleteRole}
          argument={this.state.roleId}
        />
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
