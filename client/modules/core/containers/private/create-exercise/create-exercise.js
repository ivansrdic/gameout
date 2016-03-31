import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercise from '../../../components/private/create-exercise/create-exercise.jsx';

export const composer = ({context, stateKey,  clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, {Exercise}) => {
  return {
    stateKey: Exercise.stateKey,
    nameValidation: Exercise.nameValidation,
    descriptionValidation: Exercise.descriptionValidation,
    unitValidation: Exercise.unitValidation,
    createExercise: Exercise.createExercise,
    clearErrors: Exercise.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateExercise);