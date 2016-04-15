import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

export const composer = ({localState}, onData) => {
  const messages = localState();

  onData(null, {
    ready: true,
    messages
  });
};

function depsMapper(context, {Exercise, Workout}) {
  return ({
    stateKey: Workout.stateKey,
    localState: Workout.localState,
    nameValidation : Workout.nameValidation,
    descriptionValidation: Workout.descriptionValidation,
    createWorkout: Workout.createWorkout,
    getExercises: Exercise.getExercises,
    getWorkouts: Workout.getWorkouts,
    clearState: Workout.clearState,
    context: () => context
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);