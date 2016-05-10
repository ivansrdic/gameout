import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkoutPanel from '../../../components/private/workout/workouts.jsx';

export const composer = ({getWorkouts, getPublicWorkouts}, onData) => {
  const publicWorkoutsSubscription = Meteor.subscribe('public-workouts');
  
  const workouts = getWorkouts();
  const publicWorkouts = getPublicWorkouts();

  onData(null, {
    workouts,
    publicWorkouts
  });
};

export const depsMapper = (context, {Workout}) => {
  return {
    getWorkouts: Workout.getWorkouts,
    getWorkoutExercises: Workout.getWorkoutExercises,
    removeWorkout: Workout.removeWorkout,
    publishWorkout: Workout.publishWorkout,
    unPublishWorkout: Workout.unPublishWorkout,
    subscribeToWorkout: Workout.subscribeToWorkout,
    unSubscribeFromWorkout: Workout.unSubscribeFromWorkout,
    getPublicWorkouts: Workout.getPublicWorkouts
  }
};

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CreateWorkoutPanel);