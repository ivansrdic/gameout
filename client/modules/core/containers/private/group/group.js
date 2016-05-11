import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Group from '../../../components/private/group/group.jsx';

function composer({getCharacter, getMembers, getGroup, getQuest}, onData) {
  const characterSubscription = Meteor.subscribe('character');

  if (characterSubscription.ready()) {
    const character = getCharacter();
    const members = getMembers();
    const group = getGroup();
    const quest = getQuest();

    const data = {
      ready: true,
      character,
      members,
      group,
      quest
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