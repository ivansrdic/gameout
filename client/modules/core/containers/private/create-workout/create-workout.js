import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get('CREATE_WORKOUT_ERRORS');
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  console.log(actions);
  return {
    workoutNameValidation: actions.Workouts.workoutNameValidation,
    clearErrors: actions.Workouts.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);