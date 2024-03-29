import {Characters, Levels} from '/collections';

export default {
  getCharacter({}, user = Meteor.user()) {
    return Characters.findOne({ownerId: user._id});
  },

  getGroup({Meteor}) {
    return Meteor.user().group();
  },

  getLevel({Meteor}) {
    const character = Meteor.user().character();

    if(character) {
      const level = Levels.findOne({level: character.stats.level});

      return level?level:Levels.findOne();
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

  selectWorkout({Meteor}, workout) {
    Meteor.call('user.selectWorkout', workout._id, function(err) {
      if(err) console.log(err);
    });
  },

  finishWorkout({Meteor}) {
    Meteor.call('user.finishWorkout', function(err) {
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
