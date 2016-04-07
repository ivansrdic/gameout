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
    if (this.state.alertVisible) {
      if(this.props.error)
        return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this)}>
          <span className="fa fa-exclamation-circle"></span> <strong>{this.props.error}</strong>
        </Alert>
        );
      else if(this.props.success)
        return (
          <Alert bsStyle="success" onDismiss={this.handleAlertDismiss.bind(this)}>
            <span className="fa fa-check"></span> <strong>{this.props.success}</strong>
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