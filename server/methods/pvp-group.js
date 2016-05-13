import {Meteor} from 'meteor/meteor';
import {PvPGroups, Groups, Users, Characters, Levels, Items, Skins} from '/collections';

export default function() {
  Meteor.methods({
    'pvp-group.startPvP'(opponentUsername) {
      let challenger = Users.findOne(this.userId);
      let opponent = Users.findOne({username: opponentUsername});

      if (challenger.pvpGroup() || opponent.pvpGroup())
        throw new Meteor.Error("pvp-group.startPvP", "User is already in PvP challenge");

      if (!challenger || !opponent || challenger._id == opponent._id)
        throw new Meteor.Error("pvp-group.startPvP", "opponent not defined");

      let pvpGroup = {
        firstPlayerId: challenger._id,
        secondPlayerId: opponent._id,
        firstPlayerHealth: challenger.character().stats.maxHealth,
        secondPlayerHealth: opponent.character().stats.maxHealth,
        rewards: {}
      };

      let pvpGroupId = PvPGroups.insert(pvpGroup);
      Users.update(challenger._id, {$set: {"data.pvpGroupId": pvpGroupId}});
      Users.update(opponent._id, {$set: {"data.pvpGroupId": pvpGroupId}});
    },

    'pvp-group.fightOpponent'(p) {
      let user = Users.findOne(this.userId);
      let pvpGroup = user.pvpGroup();
      
      let damage = {
        userId: this.userId,
        damageToEnemy: Math.round(user.character().getTotalStats().strength * p),
      }

      PvPGroups.update(pvpGroup._id, {$push: {damageHistory: damage}});
      if (pvpGroup.firstPlayerId == this.userId) {
        if (damage.damageToEnemy >= pvpGroup.secondPlayerHealth) {
          Meteor.call("pvp-group.finishPvP", pvpGroup.firstPlayerId, pvpGroup.secondPlayerId)
        }
        else {
          PvPGroups.update(pvpGroup._id, {$inc: {secondPlayerHealth: -damage.damageToEnemy}});
        }
      }
      else if (pvpGroup.secondPlayerId == this.userId) {
        if (damage.damageToEnemy >= pvpGroup.firstPlayerHealth) {
          Meteor.call("pvp-group.finishPvP", pvpGroup.secondPlayerId, pvpGroup.firstPlayerId)
        }
        else {
          PvPGroups.update(pvpGroup._id, {$inc: {firstPlayerHealth: -damage.damageToEnemy}});
        }
      }
    },

    'pvp-group.finishPvP'(winnerId, loserId) {
      let winner = Users.findOne(winnerId);
      let loser = Users.findOne(loserId);
      let pvpGroup = winner.pvpGroup();
      let pvpGroupId = pvpGroup._id;

      Meteor.call("character.reward", winner.character()._id, pvpGroup.rewards.experience, pvpGroup.rewards.gold);
      Users.update(winner._id, {$unset: {"data.pvpGroupId": ""}});
      Users.update(loser._id, {$unset: {"data.pvpGroupId": ""}});
      PvPGroups.remove(pvpGroup._id);
    },

    'pvp-group.surrender'() {
      let user = Users.findOne(this.userId);

      if (!user.pvpGroup())
        throw new Meteor.Error("pvp-group.surrender", "user is not currenty in pvp challange");

      if (this.userId == user.pvpGroup().firstPlayerId)
        Meteor.call("pvp-group.finishPvP", user.pvpGroup().secondPlayerId, user.pvpGroup().firstPlayerId)
      else 
        Meteor.call("pvp-group.finishPvP", user.pvpGroup().firstPlayerId, user.pvpGroup().secondPlayerId)
    }

  });
}

      
 
