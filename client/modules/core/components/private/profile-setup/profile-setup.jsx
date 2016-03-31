import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import EditInfo from '../../../containers/private/profile-setup/edit-info.jsx';
import CustomizeCharacter from '../../../containers/private/profile-setup/customize-character.jsx';


class ProfileSetup extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>

              <EditInfo />
              {this.renderChoice(this.props.choice)}

            </Panel>
          </Col>
        </Row>
      </Grid>
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