import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

export const composer = ({context, stateKey,  clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  return {
    stateKey: actions.Workouts.stateKey,
    nameValidation: actions.Workouts.nameValidation,
    descriptionValidation: actions.Workouts.descriptionValidation,
    unitValidation: actions.Workouts.unitValidation,
    createWorkout: actions.Workouts.createWorkout,
    clearErrors: actions.Workouts.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);