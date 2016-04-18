import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkoutPanel from '../../../components/private/workout/workouts.jsx';

export const composer = ({getWorkouts}, onData) => {
  const workouts = getWorkouts();

  onData(null, {
    workouts
  });
};

export const depsMapper = (context, {Workout}) => {
  return {
    getWorkouts: Workout.getWorkouts,
    getWorkoutExercises: Workout.getWorkoutExercises,
    removeWorkout: Workout.removeWorkout
  }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CreateWorkoutPanel);