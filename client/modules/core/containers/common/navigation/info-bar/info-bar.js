import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import InfoBar from '../../../../components/common/navigation/info-bar/info-bar.jsx';

export const composer = ({context, getCharacter}, onData) => {
  const stats = getCharacter().stats;
  onData(null, {stats});
};

export const depsMapper = (context, actions) => {
  return {
    getCharacter: actions.Profile.getCharacter,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper),
)(InfoBar);