import ProfileSetup from '../../../components/private/profile-setup/profile-setup.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, isUserInfoDone}, onData) => {
  const userInfoSubscription = context().Meteor.subscribe("user");

  if (userInfoSubscription.ready()) {
    const choice = isUserInfoDone() ? 'customize-character' : 'edit-info';
    onData(null, {choice, ready: true});
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  return {
    clearErrors: actions.ProfileSetup.clearErrors,
    isUserInfoDone: actions.ProfileSetup.isUserInfoDone,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileSetup);