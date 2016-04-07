import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true
    };
  }

  render() {
    const {message} = this.props;
    if (this.state.alertVisible && message) {
        if(message.status === 'error')
          return (
          <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
            <span className="fa fa-exclamation-circle"></span> <strong>{message.message}</strong>
          </Alert>
          );
        else if(message.status === 'success')
          return (
            <Alert bsStyle="success" onDismiss={this.handleAlertDismiss.bind(this)}>
              <span className="fa fa-check"></span> <strong>{message.message}</strong>
            </Alert>
          );
        else
          return (
            <div></div>
          );
    } else
      return (
        <div></div>
      );
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }
}

export default SignIn;