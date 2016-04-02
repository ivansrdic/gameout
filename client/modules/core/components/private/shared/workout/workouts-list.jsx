import React, {Component} from 'react';
import {ListGroup} from 'react-bootstrap';
import Workout from './workout.jsx';

class WorkoutsList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <ListGroup>
        {this.renderWorkouts()}
      </ListGroup>
    );
  }

  renderWorkouts() {
    const {workouts} = this.props;

    return (workouts.map(function (workout) {
      return (<Workout key={workout.name} workout={workout} onClickWorkout={this.props.onClickWorkout}/>);
    }.bind(this)));
  }
}

export default WorkoutsList;