export default {
  getCharacter({Meteor}) {
    return Meteor.user().character();
  },

  getInventory() {
    return Meteor.user().character().inventory();
  },

  equipItem({Meteor}, itemId) {
    Meteor.call('equipItem', Meteor.user().data.characterId, itemId);
  },

  unEquipItem({Meteor}, itemId) {
    Meteor.call('unEquipItem', Meteor.user().data.characterId, itemId);
  },

  getWorkouts() {
    return Meteor.user().exerciseGroups();
  },

  getExercises({}, workout) {
    return workout.exercises();
  }
}