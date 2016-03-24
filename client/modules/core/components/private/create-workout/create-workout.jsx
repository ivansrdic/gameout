import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import Actions from '/client/modules/core/actions';

class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      type: "",
      tips: ""
    }
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
                        type="text"
                        label="Workout name"
                        placeholder="Workout name"
                        value={this.state.name}
                        onChange={this.handleNameChange.bind(this)}
                      />
                      <Input
                        type="textarea"
                        label="Description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange.bind(this)}
                      />
                      <Input
                        type="text"
                        label="Type"
                        placeholder="Type"
                        value={this.state.type}
                        onChange={this.handleTypeChange.bind(this)}
                      />
                      <Input
                        type="textarea"
                        label="Tips and advices"
                        placeholder="The workout is too exhausting for beginners? Help them get through it :) "
                        value={this.state.tips}
                        onChange={this.handleTipsChange.bind(this)}
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

  handleNameChange(e) {
    this.setState({
      name: $(e.target).val()
    });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: $(e.target).val()
    });
  }

  handleTypeChange(e) {
    this.setState({
      type: $(e.target).val()
    });
  }

  handleTipsChange(e) {
    this.setState({
      tips: $(e.target).val()
    });
  }

  // TODO: validation and error setting
  handleSetupFormSubmit(e) {
    e.preventDefault();

    Actions.Workouts.createWorkout({
      name: this.state.name,
      description: this.state.description,
      type: this.state.type,
      tips: this.state.tips
    });
  }
}

export default CreateWorkout;