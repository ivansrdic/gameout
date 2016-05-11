import Loading from '../../../components/private/shared/loading/loading.jsx';
import ProfileSetup from '../../../components/private/profile-setup/profile-setup.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors, isUserInfoDone}, onData) => {
  const choice = isUserInfoDone() ? 'customize-character' : 'edit-info';
  NProgress.done();
  onData(null, {choice});

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
  composeWithTracker(composer, Loading),
  useDeps(depsMapper)
)(ProfileSetup);