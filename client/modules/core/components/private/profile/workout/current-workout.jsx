import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import WorkoutsList from '../../shared/workout/workouts-list.jsx';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';

class CurrentWorkout extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {currentWorkout, getWorkoutExercises, getWorkouts, selectWorkout} = this.props;

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
            <Button bsSize="medium" bsStyle="success" onClick={this.finishWorkout.bind(this)}>Finish</Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="text-center">Choose Your Workout For Today</h2>
          <WorkoutsList
              workouts={getWorkouts()}
              getWorkoutExercises={getWorkoutExercises}
              onClickWorkout={selectWorkout} />
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

export default CurrentWorkout;