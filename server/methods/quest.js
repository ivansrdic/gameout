import {Meteor} from 'meteor/meteor';
import {Quests, Groups, Users, Characters, Levels, Items, Skins} from '/collections';


export default function() {
  Meteor.methods({
    'quest.beginQuest'(questId, groupId) {
      let group = Users.findOne(this.userId).group();
      let quest = Quests.findOne(questId);

      if (group._id != groupId || group.ownerId != this.userId) {
        throw new Meteor.Error("quest.begginQuest", "Only group owner can start a quest");
      }
      Groups.update(groupId, {$set: {questId: questId}});
      Groups.update(groupId, {$set: {currentBossHealth: quest.boss.maxHealth}});
    },
    
    'quest.fightBoss'(p) {
      let user = Users.findOne(this.userId);
      let currentWorkout = user.currentWorkout();
      let quest = user.group().quest();

      let damage = {
        userId: this.userId,
        damageToBoss: Math.round(user.character().getTotalStats().strength * p),
        damageFromBoss: Math.round(quest.boss.damage * Math.max((1-p), 0))
      }

      Groups.update(user.group()._id, {$push: {damageHistory: damage}});
      if (user.group().currentBossHealth <= damage.damageToBoss) {
        Meteor.call("quest.finishQuest");
      }
      else {
        Groups.update(user.group()._id, {$inc: {"currentBossHealth": -damage.damageToBoss}});
        user.group().members().forEach((user) => {
          Characters.update(user.character()._id, {$inc: {"stats.currentHealth": -damage.damageFromBoss}});
        });
      }
    },

    'quest.finishQuest'() {
      let user = Users.findOne(this.userId);
      let quest = user.group().quest();

      user.group().members().forEach((user) => {
        Meteor.call("character.reward", user.character()._id, quest.rewards.experience, quest.rewards.gold);
      });

      Groups.update(user.group()._id, {$unset: {questId: ""}});
    }

  });
}

      
      
