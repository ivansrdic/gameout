import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import Workout from './workout.jsx';
import WorkoutsInfo from './workout-info.jsx'

class WorkoutsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: null,
      showInfo: false
    };
  }

  render() {
    if (this.props.workouts)
      return (
        <div>
          <ListGroup className="workout-list">
            {this.renderWorkouts()}
          </ListGroup>
          <WorkoutsInfo
            show={this.state.showInfo}
            workout={this.state.workout}
            getWorkoutExercises={this.props.getWorkoutExercises}
            closeWorkoutInfo={this.closeWorkoutInfo.bind(this)}
          />
        </div>
      );
    else
      return (
        <div></div>
      );
  }

  renderWorkouts() {
    const {workouts} = this.props;

    return (workouts.map(function (workout) {
      return (
          <Workout
              key={workout._id}
              workout={workout}
              onClickWorkout={this.props.onClickWorkout}
              onClickDelete={this.props.onClickDelete}
              onClickRemove={this.props.onClickRemove}
              onClickPublish={this.props.onClickPublish}
              onClickUnpublish={this.props.onClickUnpublish}
              onClickSubscribe={this.props.onClickSubscribe}
              onClickUnsubscribe={this.props.onClickUnsubscribe}
              onClickInfo={this.onClickInfo.bind(this)}
          />
      );
    }.bind(this)));
  }

  onClickInfo(workout) {
    this.setState({
      workout,
      showInfo: true
    });
  }

  closeWorkoutInfo() {
    this.setState({
      showInfo: false
    });
  }
}

export default WorkoutsList;