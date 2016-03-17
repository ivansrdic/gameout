import React, {Component} from 'react';
import {Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';

class EditInfo extends Component {
  constructor(props, content = null) {
    super(props);
    this.props.content = content;
  }

  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <h1 className="text-center">Customize character</h1>

                <form>
                  <label htmlFor="level" className="control-label input-group">Gender</label>
                  <ButtonGroup className="form-group" bsSize="large" data-toggle="buttons">
                    <label className="btn btn-default">
                      <input name="level" value="male" type="radio"/>Male
                    </label>
                    <label className="btn btn-default">
                      <input name="level" value="female" type="radio"/>Female
                    </label>
                  </ButtonGroup>
                  <Input type="text" label="Age" placeholder="Age"/>
                  <Input type="text" label="Height" placeholder="Height"/>
                  <Input type="text" label="Weight" placeholder="Weight"/>
                  <label htmlFor="level" className="control-label input-group">Level</label>
                  <ButtonGroup className="form-group" bsSize="large" data-toggle="buttons">
                    <label className="btn btn-default">
                      <input name="level" value="Beginner" type="radio"/>Beginner
                    </label>
                    <label className="btn btn-default">
                      <input name="level" value="Intermediate" type="radio"/>Intermediate
                    </label>
                    <label className="btn btn-default">
                      <input name="level" value="Advanced" type="radio"/>Advanced
                    </label>
                  </ButtonGroup>
                  <ButtonInput className="pull-right" type="submit" value="Next"/>
                </form>
              </Col>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }


}

export default EditInfo;