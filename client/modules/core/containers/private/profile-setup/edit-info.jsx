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
    stateKey: actions.EditInfo.stateKey,
    ageValidation: actions.EditInfo.ageValidation,
    heightValidation: actions.EditInfo.heightValidation,
    weightValidation: actions.EditInfo.weightValidation,
    usernameValidation: actions.EditInfo.usernameValidation,
    submitUserInfo: actions.EditInfo.submitUserInfo,
    createCharacter: actions.CustomizeCharacter.createCharacter,
    clearErrors: actions.EditInfo.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditInfo);