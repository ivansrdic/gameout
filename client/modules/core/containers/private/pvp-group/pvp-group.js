import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Group from '../../../components/private/pvp-group/pvp-group.jsx';

function composer({getGroup, getFirstPlayer, getSecondPlayer}, onData) {

  const characterSubscription = Meteor.subscribe('character');

  if(characterSubscription.ready()) {
    const group = getGroup();
    const firstPlayer = getFirstPlayer();
    const secondPlayer = getSecondPlayer();

    const data = {
      group,
      firstPlayer,
      secondPlayer
    };

    NProgress.done();

    onData(null, data);
  }
}

function depsMapper(context, {Profile, PvPGroup}) {
  return ({
    getCharacter: Profile.getCharacter,
    getGroup: PvPGroup.getGroup,
    getOwner: PvPGroup.getOwner,
    getFirstPlayer: PvPGroup.getFirstPlayer,
    getSecondPlayer: PvPGroup.getSecondPlayer,
    getDamageHistory: PvPGroup.getDamageHistory,
    startPvP: PvPGroup.startPvP,
    surrender: PvPGroup.surrender
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Group);