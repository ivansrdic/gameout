import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Group from '../../../components/private/group/group.jsx';

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

function depsMapper(context, {Profile, Group}) {
  return ({
    getCharacter: Profile.getCharacter,
    getGroup: Group.getGroup,
    getQuest: Group.getQuest,
    getOwner: Group.getOwner,
    getMembers: Group.getMembers,
    addUserToGroup: Group.addUserToGroup,
    removeUserFromGroup: Group.removeUserFromGroup
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Group);