import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercise from '../../../components/private/exercise/create-exercise.jsx';

export const composer = ({localState}, onData) => {
  const messages = localState();

  onData(null, {
    ready: true,
    messages
  });
};

export const depsMapper = (context, {Exercise}) => {
  return {
    stateKey: Exercise.stateKey,
    localState: Exercise.localState,
    nameValidation: Exercise.nameValidation,
    descriptionValidation: Exercise.descriptionValidation,
    linkValidation: Exercise.linkValidation,
    unitValidation: Exercise.unitValidation,
    createExercise: Exercise.createExercise,
    clearState: Exercise.clearState
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateExercise);