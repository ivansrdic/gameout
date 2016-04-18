import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({getCharacter, getLevel}, onData) {
  const characterSubscription = Meteor.subscribe('character');

  if (characterSubscription.ready()) {
    const character = getCharacter();

    console.log(getLevel());
    console.log(character.stats.level);
    
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
    getWorkoutExercises: Workout.getWorkoutExercises,
    completeExercise: Profile.completeExercise
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);