import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercisePanel from '../../../components/private/exercise/exercises.jsx';

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