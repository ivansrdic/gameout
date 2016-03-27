import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({Actions}, onData) {
  const characterSubscription = Meteor.subscribe('character');
  const itemsSubscription = Meteor.subscribe('items');

  if (characterSubscription.ready() && itemsSubscription.ready()) {
    const character = Actions.getCharacter();
    
    const data = {
      ready: true,
      character,
      inventory: character.inventory(),
      Actions
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

function depsMapper(context, actions) {
  return ({
    Actions: actions.Profile
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Profile);