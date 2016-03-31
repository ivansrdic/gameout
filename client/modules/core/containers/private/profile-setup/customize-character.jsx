import CustomizeCharacter from '../../../components/private/profile-setup/customize-character.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, stateKey, clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  return {
    stateKey: actions.CustomizeCharacter.stateKey,
    clearErrors: actions.CustomizeCharacter.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CustomizeCharacter);