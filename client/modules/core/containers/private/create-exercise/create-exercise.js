import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercise from '../../../components/private/create-exercise/create-exercise.jsx';

export const composer = ({context, stateKey, getExercises, clearErrors}, onData) => {
  const exercisesSubscription = Meteor.subscribe('exercises');

  const {LocalState} = context();
  const messages = LocalState.get(stateKey()) || {};

  if(exercisesSubscription.ready()) {
    const exercises = getExercises();

    onData(null, {
      ready: true,
      messages,
      exercises
    });
  } else {
    onData(null, {messages});
  }

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
    getExercises: Exercise.getExercises,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateExercise);