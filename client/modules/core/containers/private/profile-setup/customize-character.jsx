import Loading from '../../../components/private/shared/loading/loading.jsx';
import CustomizeCharacter from '../../../components/private/profile-setup/customize-character.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, stateKey, clearErrors}, onData) => {
  const characterSubscription = context().Meteor.subscribe('character');
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};

  if (characterSubscription.ready()) {
    onData(null, {errors, ready: true});
  }

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  return {
    getCharacter: actions.Profile.getCharacter,
    getHairs: actions.CustomizeCharacter.getHairs,
    getTorsos: actions.CustomizeCharacter.getTorsos,
    getLegs: actions.CustomizeCharacter.getLegs,
    getColors: actions.CustomizeCharacter.getColors,
    getAppearanceIds: actions.CustomizeCharacter.getAppearanceIds,
    equipSkin: actions.CustomizeCharacter.equipSkin,
    createCharacter: actions.CustomizeCharacter.createCharacter,
    stateKey: actions.CustomizeCharacter.stateKey,
    clearErrors: actions.CustomizeCharacter.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer, Loading),
  useDeps(depsMapper),
)(CustomizeCharacter);