import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';

class CurrentExercises extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {currentWorkout, getWorkoutExercises} = this.props;
    if(currentWorkout)
      return (
        <div>
          <ExercisesList exercises={getWorkoutExercises(currentWorkout.workout)} />
          <div className="center-button">
            <Button bsSize="large" bsStyle="success" onClick={this.props.finishWorkout}>Finish</Button>
          </div>
        </div>
      );
    else {
      return (
        <div className="center-button">
          <Button bsSize="large" bsStyle="danger" onClick={this.props.showWorkoutSelection}>Ready</Button>
        </div>
      );
    }
  }
}

export default CurrentExercises;