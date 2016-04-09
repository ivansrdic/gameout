import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import WorkoutsList from '../../shared/workout/workouts-list.jsx';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';

class CurrentExercises extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {currentWorkout, getWorkoutExercises} = this.props;

    if(currentWorkout) {
      const completedExerciseIds = currentWorkout.completedExercises.map((e) => {return e._id});

      return (
        <div>
          <h2 className="text-center">{currentWorkout.workout.name}</h2>
          <ExercisesList
            exercises={getWorkoutExercises(currentWorkout.workout)}
            completedExerciseIds={completedExerciseIds}
            onClickExercise={this.completeExercise.bind(this)}
          />
          <div className="center-button">
            <Button bsSize="large" bsStyle="success" onClick={this.finishWorkout.bind(this)}>Finish</Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center">Choose Your Workout For Today</h2>
          <WorkoutsList workouts={this.props.getWorkouts()} onClickWorkout={this.props.selectWorkout} />
        </div>
      );
    }
  }

  completeExercise(exercise) {
    this.props.completeExercise(exercise._id);
  }

  finishWorkout() {
    this.props.finishWorkout(this.props.currentWorkout.workout._id);
  }
}

export default CurrentExercises;