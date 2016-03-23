import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Tabs, Tab, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class CreateWorkout extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <form onSubmit={this.handleSetupFormSubmit}>
                    <hr/>
                      <h1 className="text-center">Create workout</h1>
                      <Input id="workout-name" type="text" label="Workout name" placeholder="Workout name"/>
                      <Input id="workout-description" type="text" label="Description" placeholder="Description"/>
                      <label htmlFor="training-type" className="control-label input-group">Training Type</label>
                      <ButtonGroup id="training-type" className="form-group" bsSize="large" data-toggle="buttons">
                        <label className="btn btn-default">
                          <input name="training-type" value="cardio" type="radio"/>Cardio
                        </label>
                        <label className="btn btn-default">
                          <input name="training-type" value="total-body" type="radio"/>Total Body
                        </label>
                        <label className="btn btn-default">
                          <input name="traning-type" value="upper-body" type="radio"/>Upper Body
                        </label>
                        <label className="btn btn-default">
                          <input name="training-type" value="lower-body" type="radio"/>Lower Body
                        </label>
                        <label className="btn btn-default">
                          <input name="training-type" value="ab-intervals" type="radio"/>Ab interval
                        </label>
                      </ButtonGroup>
                      <br/>
                      <Input id="workout-tips" type="text" label="Tips and advices" placeholder="Exercise is too exausting for beginners? Help them get through it :) "/>
                      <ButtonInput className="pull-right" type="submit" value="Save"/>
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

export default CreateWorkout;