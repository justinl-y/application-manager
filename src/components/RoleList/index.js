import React, { Component } from 'react';

import { Card, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './styles.scss';

class RoleList extends Component {
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
              <ToolbarTitle text="Jobs Applied" />
            </Toolbar>
            <CardText>
              <Table>
                <TableBody />
              </Table>
            </CardText>
          </Paper>
        </Card>
      </div>
    );
  }
}

export default RoleList;
