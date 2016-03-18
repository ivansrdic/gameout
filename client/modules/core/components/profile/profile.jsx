import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

class EditInfo extends Component {
  // TODO: better checking of complete setup
  componentDidMount() {
    setTimeout(function() {
      if(!Meteor.users.findOne(Meteor.userId()).completedSetup) {
        alert('Please complete your setup');
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <h1 className="text-center">Hello, {Meteor.user().profile.name}</h1>

            <p>User data</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditInfo;