import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import EditInfo from '../../../containers/private/profile-setup/edit-info.jsx';
import CustomizeCharacter from '../../../containers/private/profile-setup/customize-character.jsx';

class ProfileSetup extends Component {
  render() {
    return (
      <div>
        {this.renderChoice(this.props.choice)}
      </div>
    );
  }

  renderChoice(choice) {
    if (choice == 'customize-character') {
      return <CustomizeCharacter />
    } else {
      return <EditInfo />
    }
  }

}

export default ProfileSetup;