import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

function composer({Actions}, onData) {
  const exercisesSubscription = Meteor.subscribe('exercises');
  const workoutsSubscription = Meteor.subscribe('workouts');

  if(exercisesSubscription.ready() && workoutsSubscription.ready()) {
    onData(null, {ready: true});
  } else {
    onData(null, {ready: false});
  }
}

function depsMapper(context, {Exercise, Workout}) {
  return ({
    createWorkout: Workout.createWorkout,
    getExercises: Exercise.getExercises,
    getWorkouts: Workout.getWorkouts
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);