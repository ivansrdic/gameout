import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class AccountsUIWrapper extends Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template._loginButtons,
      document.getElementById('accounts-ui-container'));
  }

  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }

  render() {
    return null;
  }
}

export default AccountsUIWrapper;