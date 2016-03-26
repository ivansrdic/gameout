import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import CreateWorkoutGroup from '../../../components/private/create-workout-group/create-workout-group.jsx';

function composer({Actions}, onData) {
    onData(null, {Actions});
}

// actions.Wokrouts or actions.WorkoutGroups
function depsMapper(context, actions) {
    return ({
        Actions: actions.workoutGroups
    });
}

export default composeAll(
    composeWithTracker(composer),
    useDeps(depsMapper)
)(CreateWorkoutGroup);