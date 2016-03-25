import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Profile from '../../../components/private/profile/profile.jsx';

function composer({Actions}, onData) {
  const subscription = Meteor.subscribe('character');

  if (subscription.ready()) {
    const data = {
      ready: true,
      character: Actions.getCharacter(),
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