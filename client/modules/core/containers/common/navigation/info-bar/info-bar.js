import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import InfoBar from '../../../../components/common/navigation/info-bar/info-bar.jsx';

export const composer = ({getCharacter, getLevel}, onData) => {
  const character = getCharacter();
  const level = getLevel();
  onData(null, {character, level});
};

export const depsMapper = (context, {Profile}) => {
  return {
    getCharacter: Profile.getCharacter,
    getLevel: Profile.getLevel,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(InfoBar);