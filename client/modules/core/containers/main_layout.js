import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import MainLayout from '../components/main_layout.jsx';

export function composer({logout}, onData) {
  const subUser= Meteor.subscribe('user');
  
  if (subUser.ready()) {
    const data = {
      ready: true,
      user: Meteor.user(),
      logout
    };
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