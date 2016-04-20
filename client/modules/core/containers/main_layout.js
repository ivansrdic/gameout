import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import MainLayout from '../components/main_layout.jsx';

export function composer({logout}, onData) {
  const subUser = Meteor.subscribe('user');

  if (subUser.ready()) {
    const data = {
      ready: true,
      user: Meteor.user(),
      logout
    };

    // FlowRouter can be reached through context variable that can be injected.
    if (!Meteor.user().data) console.log("There is a fucking error in redirection happening!");
    if (!Meteor.user().data.characterId && FlowRouter.current().pathname != "/profile-setup") {
      FlowRouter.go('/profile-setup');
    }

    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

function depsMapper(context, {Authorization}) {
  return ({
    logout: Authorization.logout
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);