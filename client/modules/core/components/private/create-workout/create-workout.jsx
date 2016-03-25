import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';

class CreateWorkout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Col md={10} mdOffset={1}>
                <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                    <hr/>
                      <h1 className="text-center">Create workout</h1>
                      <Input
                        ref="name"
                        type="text"
                        label="Workout name"
                        placeholder="Workout name"
                      />
                      <Input
                        ref="description"
                        type="textarea"
                        label="Description"
                        placeholder="Description"
                      />
                      <Input
                        ref="tags"
                        type="text"
                        label="Tags"
                        placeholder="Tags"
                      />
                      <Input
                        ref="tips"
                        type="textarea"
                        label="Tips and advices"
                        placeholder="The workout is too exhausting for beginners? Help them get through it :) "
                      />
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

    const {name, description, tags, tips} = this.refs;

    this.props.Actions.createWorkout({
      name: name.getValue(),
      description: description.getValue(),
      tags: tags.getValue(),
      tips: tips.getValue()
    });
  }
}

export default CreateWorkout;