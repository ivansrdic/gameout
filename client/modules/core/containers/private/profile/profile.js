import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({getCharacter}, onData) {
  const characterSubscription = Meteor.subscribe('character');
  const itemsSubscription = Meteor.subscribe('items');
  const skinsSubscription = Meteor.subscribe('skins');
  const exercisesSubscription = Meteor.subscribe('exercises');
  const workoutsSubscription = Meteor.subscribe('workouts');

  if (characterSubscription.ready() &&
    itemsSubscription.ready() && skinsSubscription.ready() &&
    exercisesSubscription.ready() && workoutsSubscription.ready()) {

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
    getInventory: Profile.getInventory,
    getEquipment: Profile.getEquipment,
    getEquipmentIds: Profile.getEquipmentIds,
    selectWorkout: Profile.selectWorkout,
    getSelectedWorkout: Profile.getSelectedWorkout,
    equipItem: Profile.equipItem,
    getWorkouts: Workout.getWorkouts,
    getWorkoutExercises: Workout.getExercises
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);