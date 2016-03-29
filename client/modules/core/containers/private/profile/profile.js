import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({getCharacter}, onData) {
  const characterSubscription = Meteor.subscribe('character');
  const itemsSubscription = Meteor.subscribe('items');
  const skinsSubscription = Meteor.subscribe('skins');
  const exercisesSubscription = Meteor.subscribe('exercises');
  const exerciseGroupsSubscription = Meteor.subscribe('exercise-groups');

  if (characterSubscription.ready() &&
    itemsSubscription.ready() && skinsSubscription.ready() &&
    exercisesSubscription.ready() && exerciseGroupsSubscription.ready()) {

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

function depsMapper(context, actions) {
  return ({
    getCharacter: actions.Profile.getCharacter,
    getInventory: actions.Profile.getInventory,
    equipItem: actions.Profile.equipItem,
    unEquipItem: actions.Profile.unEquipItem,
    getWorkouts: actions.Profile.getWorkouts,
    getExercises: actions.Profile.getExercises
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);