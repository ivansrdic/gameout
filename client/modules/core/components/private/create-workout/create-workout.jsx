import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';

class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  componentDidUpdate() {
    if (this.props.ready) {
      NProgress.done();
    }
  }

  render() {
    const {ready} = this.props;
    if(ready) {
      return (
        <Grid>
          <Row>
            <Col md={12}>
              <Panel>
                <h1 className="text-center">Create workout</h1>
                <hr/>
                <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                  <Col md={6}>
                    <Input
                      ref="name"
                      type="text-left"
                      label="Group workout name"
                      placeholder="Group workout name"
                    />
                    <Input
                      ref="description"
                      type="textarea"
                      label="Description"
                      placeholder="Description"
                    />
                    <ButtonInput onClick={ ()=> this.setState({ open: !this.state.open })}>
                      Workout list
                    </ButtonInput>
                    <Panel collapsible expanded={this.state.open}>
                      {this.showData()}
                    </Panel>
                  </Col>
                  <Col md={6}>
                    <Panel header="Selected workouts">
                      Ovdje nekako ubaciti popis odabranih vježbi <br />
                      Vježba 2<br />
                      Vježba 3<br />
                      <br />
                      <ButtonInput className="pull-right">
                        +
                      </ButtonInput>
                    </Panel>
                    <ButtonInput className="pull-right" type="submit" value="Save"/>
                  </Col>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  showData() {
    const workouts = this.props.getWorkouts();
    return (workouts.map(function (workout) {
        console.log(workout.name);
      }
    ));
  }

  // TODO: validation and error setting
  handleSetupFormSubmit(e) {
    e.preventDefault();

    const {name, description} = this.refs;

    this.props.createWorkout({
      name: name.getValue(),
      description: description.getValue()
    });
  }
}

export default CreateWorkout;