import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class ProfileSetup extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <form onSubmit={this.handleSetupFormSubmit}>
                  <Tabs defaultActiveKey={1} bsStyle="pills">
                    <hr/>
                    <Tab eventKey={1} title="User information">
                      <h1 className="text-center">User information</h1>

                      <Input id="age" type="text" label="Age" placeholder="Age"/>
                      <Input id="height" type="text" label="Height" placeholder="Height"/>
                      <Input id="weight" type="text" label="Weight" placeholder="Weight"/>
                      <label htmlFor="level" className="control-label input-group">Level</label>
                      <ButtonGroup id="level" className="form-group" bsSize="large" data-toggle="buttons">
                        <label className="btn btn-default">
                          <input name="level" value="beginner" type="radio"/>Beginner
                        </label>
                        <label className="btn btn-default">
                          <input name="level" value="intermediate" type="radio"/>Intermediate
                        </label>
                        <label className="btn btn-default">
                          <input name="level" value="advanced" type="radio"/>Advanced
                        </label>
                      </ButtonGroup>
                    </Tab>
                    <Tab eventKey={2} title="Character customization" id="burek">
                      <h1 className="text-center">Character customization</h1>

                      <label htmlFor="gender" className="control-label input-group">Gender</label>
                      <ButtonGroup id="gender" className="form-group" bsSize="large" data-toggle="buttons">
                        <label className="btn btn-default">
                          <input name="gender" value="male" type="radio"/>Male
                        </label>
                        <label className="btn btn-default">
                          <input name="gender" value="female" type="radio"/>Female
                        </label>
                      </ButtonGroup>
                      <p>Character setup</p>
                      <ButtonInput className="pull-right" type="submit" value="Save"/>
                    </Tab>
                  </Tabs>
                </form>
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  // TODO: validation and error setting
  handleSetupFormSubmit(e) {
    e.preventDefault();

    const owner = Meteor.userId();
    const age = $('#age').val();
    const height = $('#height').val();
    const weight = $('#weight').val();
    const level = $("#level").find("input[name='level']:checked").val();
    const gender = $("#gender").find("input[name='gender']:checked").val();

    Actions.Profile.completeSetup({owner, age, height, weight, level, gender});
  }
}

export default ProfileSetup;