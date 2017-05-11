import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DialogModalAlert extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOK = this.handleOK.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.setState({ open: true });
    }
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOK() {
    this.props.action(this.props.argument);
    this.setState({ open: false });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="OK"
        primary
        onTouchTap={this.handleOK}
      />,
    ];

    return (
      <Dialog
        title={this.props.title}
        actions={actions}
        modal
        open={this.state.open}
      >
        {this.props.message}
      </Dialog>
    );
  }
}

DialogModalAlert.defaultProps = {
  argument: null,
};

DialogModalAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  argument: PropTypes.string,
};

export default DialogModalAlert;
