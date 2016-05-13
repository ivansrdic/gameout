import {PvPGroups} from '/collections';

export default {
  getGroup() {
    return PvPGroups.findOne();
  },

  getOwner() {
    const pvpGroup = PvPGroups.findOne();
    if(pvpGroup) return pvpGroup.owner();
  },

  getFirstPlayer() {
    const pvpGroup = PvPGroups.findOne();
    if(pvpGroup) return pvpGroup.firstPlayer();
  },

  getSecondPlayer() {
    const pvpGroup = PvPGroups.findOne();
    if(pvpGroup) return pvpGroup.secondPlayer();
  },

  getDamageHistory() {
    const pvpGroup = PvPGroups.findOne();

    return pvpGroup.damageHistory;
  },

  startPvP({Meteor}, username) {
    if(username)
      Meteor.call('pvp-group.startPvP', username, function(err) {
        if(err) console.log(err);
      });
  },

  surrender({Meteor}) {
    Meteor.call('pvp-group.surrender', function(err) {
      if(err) console.log(err);
    });
  }
}
