import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';

class CurrentExercises extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {selectedWorkout, getWorkoutExercises} = this.props;
    if(selectedWorkout)
      return (
        <div>
          <ExercisesList exercises={getWorkoutExercises(selectedWorkout)} />
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