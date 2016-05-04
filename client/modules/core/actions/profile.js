import {Characters, Levels} from '/collections';
import _ from 'lodash';

export default {
  getCharacter({Meteor}) {
    return Meteor.user().character();
  },

  getParty({Meteor}) {
    return Meteor.user().party();
  },

  getLevel({Meteor}) {
    const level = Levels.findOne({level: Meteor.user().character().stats.level});
    if(level) {
      return level;
    } else {
      return Levels.findOne();
    }
  },

  getInventory() {
    return Meteor.user().character().inventory();
  },

  equipItem({Meteor}, itemId) {
    Meteor.call('character.equipItem', Meteor.user().data.characterId, itemId, function (err) {
      if (err) console.log(err);
    });
  },

  getEquipment({Meteor}) {
    return Meteor.user().character().getEquipment();
  },

  getEquipmentIds({Meteor}) {
    const character = Meteor.user().character();

    return [character.equipment.chestId, character.equipment.headId,
      character.equipment.leftHandId, character.equipment.rightHandId];
  },

  selectWorkout({Meteor}, workoutId) {
    Meteor.call('user.selectWorkout', workoutId, function(err) {
      if(err) console.log(err);
    });
  },

  getCurrentWorkout({Meteor}) {
    return Meteor.user().currentWorkout()
  },

  completeExercise({Meteor}, exerciseId) {
    Meteor.call('user.selectExercise', exerciseId, function(err) {
      if(err) console.log(err);
    });
  }
}
