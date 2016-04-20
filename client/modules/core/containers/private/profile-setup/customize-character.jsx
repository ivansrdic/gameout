import CustomizeCharacter from '../../../components/private/profile-setup/customize-character.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, stateKey, clearErrors, getCharacter}, onData) => {
  const characterSubscription = context().Meteor.subscribe('character');
  const {LocalState} = context();
  const errors = LocalState.get(stateKey()) || {};

  if (characterSubscription.ready()) {
    const character = getCharacter();
    onData(null, {errors, character, ready: true});
  } else {
    onData(null, {ready: false})
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
  composeWithTracker(composer),
  useDeps(depsMapper),
)(CustomizeCharacter);