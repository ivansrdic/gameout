import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateExercisePanel from '../../../components/private/create-exercise/create-exercise-panel.jsx';

export const composer = ({getExercises}, onData) => {
  const exercisesSubscription = Meteor.subscribe('exercises');

  if(exercisesSubscription.ready()) {
    const exercises = getExercises();

    onData(null, {
      ready: true,
      exercises
    });
  } else {
    onData(null, {});
  }
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