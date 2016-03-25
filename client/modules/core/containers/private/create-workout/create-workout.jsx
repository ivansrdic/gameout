import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkout from '../../../components/private/create-workout/create-workout.jsx';

function composer({Actions}, onData) {
  onData(null, {Actions});
}

function depsMapper(context, actions) {
  return ({
    Actions: actions.Workouts
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CreateWorkout);