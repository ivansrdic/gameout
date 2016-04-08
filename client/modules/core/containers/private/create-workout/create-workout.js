import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

export const composer = ({context, stateKey,  clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};

  onData(null, {
    errors
  });
};

function depsMapper(context, {Exercise, Workout}) {
  return ({
    stateKey: Workout.stateKey,
    nameValidation : Workout.nameValidation,
    descriptionValidation: Workout.descriptionValidation,
    createWorkout: Workout.createWorkout,
    getExercises: Exercise.getExercises,
    getWorkouts: Workout.getWorkouts,
    clearErrors: Workout.clearErrors,
    context: () => context
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);