import EditInfo from '../../../components/private/profile-setup/edit-info.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({localState}, onData) => {
  const messages = localState();

  onData(null, {messages});
};

export const depsMapper = (context, actions) => {
  return {
    localState: actions.EditInfo.localState,
    ageValidation: actions.EditInfo.ageValidation,
    heightValidation: actions.EditInfo.heightValidation,
    weightValidation: actions.EditInfo.weightValidation,
    usernameValidation: actions.EditInfo.usernameValidation,
    submitUserInfo: actions.EditInfo.submitUserInfo,
    createCharacter: actions.CustomizeCharacter.createCharacter,
    clearState: actions.EditInfo.clearState
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditInfo);