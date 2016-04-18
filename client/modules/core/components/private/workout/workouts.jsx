import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Button} from 'react-bootstrap';
import WorkoutsList from '../shared/workout/workouts-list.jsx';
import CreateWorkout from '../../../containers/private/workout/create-workout';
import PublicWorkouts from './public-workouts.jsx';

class CreateWorkoutPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPublicWorkouts: false
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <Row>
                <Col md={10} mdOffset={1}>
                  <WorkoutsList
                      workouts={this.props.workouts}
                      getWorkoutExercises={this.props.getWorkoutExercises}
                      onClickDelete={this.props.removeWorkout}/>
                  <div className="center-button">
                    <Button bsStyle="info" onClick={this.showPublicWorkouts.bind(this)}>Search workouts</Button>
                  </div>
                </Col>
              </Row>
              <Row md ={2 }>
                <Col md={10} >
                  <CreateWorkout user={this.props.user}/>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        <PublicWorkouts
            show={this.state.showPublicWorkouts}
            workouts={this.props.workouts}
            getWorkoutExercises={this.props.getWorkoutExercises}
            closePublicWorkouts={this.closePublicWorkouts.bind(this)}
        />
      </Grid>
    );
  }

  showPublicWorkouts() {
    this.setState({
      showPublicWorkouts: true
    });
  }

  closePublicWorkouts() {
    this.setState({
      showPublicWorkouts: false
    });
  }

}

export default CreateWorkoutPanel;