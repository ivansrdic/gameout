import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({getCharacter}, onData) {
  const characterSubscription = Meteor.subscribe('character');

  if (characterSubscription.ready()) {
    const character = getCharacter();
    
    const data = {
      ready: true,
      character
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

function depsMapper(context, {Profile, Workout}) {
  return ({
    getCharacter: Profile.getCharacter,
    getLevel: Profile.getLevel,
    getInventory: Profile.getInventory,
    getEquipment: Profile.getEquipment,
    getEquipmentIds: Profile.getEquipmentIds,
    selectWorkout: Profile.selectWorkout,
    getCurrentWorkout: Profile.getCurrentWorkout,
    equipItem: Profile.equipItem,
    getWorkouts: Workout.getWorkouts,
    getWorkoutExercises: Workout.getExercises
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);