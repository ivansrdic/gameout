import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import MainLayout from '../components/main_layout.jsx';

export function composer({logout, FlowRouter}, onData) {
  const subUser = Meteor.subscribe('user');
  
  if (subUser.ready()) {
    const data = {
      ready: true,
      user: Meteor.user(),
      logout
    };
    
    if (!Meteor.user().data) console.log("There is an error in redirection!");
    if (!Meteor.user().data.characterId && FlowRouter.current().pathname != "/profile-setup") {
      FlowRouter.go('/profile-setup');
    }
    
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

function depsMapper({FlowRouter}, {Authorization}) {
  return ({
    FlowRouter,
    logout: Authorization.logout
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);