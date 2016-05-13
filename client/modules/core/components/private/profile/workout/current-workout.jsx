import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import WorkoutsList from '../../shared/workout/workouts-list.jsx';
import ExercisesList from '../../shared/exercise/exercises-list.jsx';
import CompleteAnimation from '../../shared/animations/complete.jsx';

class CurrentWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    };
  }
  
  render() {
    const {currentWorkout, getWorkoutExercises, getWorkouts, selectWorkout} = this.props;

    if(currentWorkout) {
      const completedExerciseIds = currentWorkout.completedExercises.map((e) => {return e._id});

      return (
        <div>
          <CompleteAnimation animate={this.state.animate}/>
          <h2 className="text-center">{currentWorkout.workout.name}</h2>
          <ExercisesList
            exercises={getWorkoutExercises(currentWorkout.workout)}
            completedExerciseIds={completedExerciseIds}
            onClickExercise={this.completeExercise.bind(this)}
          />
          <div className="center-button">
            <Button bsStyle="success" onClick={this.finishWorkout.bind(this)}>Finish</Button>
            <Button bsStyle="warning" onClick={this.selectWorkout.bind(this)}>Cancel</Button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <CompleteAnimation animate={this.state.animate}/>
          <h2 className="text-center">Choose Your Workout For Today</h2>
          <WorkoutsList
              workouts={getWorkouts()}
              getWorkoutExercises={getWorkoutExercises}
              onClickWorkout={selectWorkout} />
        </div>
      );
    }
  }

  componentDidMount() {
    setTimeout(function () {
      $.material.init();
    }, 0);
  }

  completeExercise(exercise) {
    this.props.completeExercise(exercise._id);
  }
  
  selectWorkout() {
    this.props.selectWorkout(this.props.currentWorkout.workout._id);
  }

  finishWorkout() {
    this.setState({animate: true});
    setTimeout(function() {
      this.setState({animate: false});
    }.bind(this), 3000);
    this.props.finishWorkout();
  }
}

export default CurrentWorkout;