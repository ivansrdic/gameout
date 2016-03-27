import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import EditInfo from '../../../containers/private/profile-setup/edit-info.jsx';


class ProfileSetup extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>

              <EditInfo />

            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }


}

export default ProfileSetup;