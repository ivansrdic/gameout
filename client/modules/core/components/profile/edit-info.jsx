import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

// TODO: create a reusable component for use in profile setup
class EditInfo extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={8} mdOffset={2}>
                <h1 className="text-center">Edit info</h1>

                <form onSubmit={this.handleFormSubmit}>
                  <Input type="text" label="Age" placeholder="Age"/>
                  <Input type="text" label="Height" placeholder="Height"/>
                  <Input type="text" label="Weight" placeholder="Weight"/>
                  <label htmlFor="level" className="control-label input-group">Level</label>
                  <ButtonGroup className="form-group" bsSize="large" data-toggle="buttons">
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
                  <ButtonInput className="pull-right" type="submit" value="Save"/>
                </form>
              </Col>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }

  handleFormSubmit(e) {
    e.preventDefault();
    FlowRouter.go('/customize-character');
  }
}

export default EditInfo;