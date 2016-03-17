import React, {Component} from 'react';
import {Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

class EditInfo extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>
                <h1 className="text-center">Hello, {Meteor.user().profile.name}</h1>

                <p>User data</p>
              </Col>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditInfo;