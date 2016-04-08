import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercisePanel from '../../../components/private/create-exercise/create-exercise-panel.jsx';

export const composer = ({getExercises}, onData) => {
  const exercises = getExercises();

  onData(null, {
    exercises
  });
};

export const depsMapper = (context, {Exercise}) => {
  return {
    getExercises: Exercise.getExercises,
    removeExercise: Exercise.removeExercise
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateExercisePanel);