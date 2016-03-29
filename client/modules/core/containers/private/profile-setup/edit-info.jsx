import EditInfo from '../../../components/private/profile-setup/edit-info.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, stateKey, clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  return {
    stateKey: actions.ProfileSettings.stateKey,
    ageValidation: actions.ProfileSettings.ageValidation,
    heightValidation: actions.ProfileSettings.heightValidation,
    weightValidation: actions.ProfileSettings.weightValidation,
    clearErrors: actions.ProfileSettings.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditInfo);