import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/workout/create-workout.jsx';

export const composer = ({localState}, onData) => {
  const messages = localState();

  onData(null, {
    ready: true,
    messages
  });
};

function depsMapper(context, {Workout}) {
  return ({
    stateKey: Workout.stateKey,
    localState: Workout.localState,
    nameValidation : Workout.nameValidation,
    descriptionValidation: Workout.descriptionValidation,
    createWorkout: Workout.createWorkout,
    getExercises: Workout.getExercises,
    getWorkouts: Workout.getWorkouts,
    getWorkoutExercises: Workout.getWorkoutExercises,
    clearState: Workout.clearState,
    context: () => context
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);