export default {
  getCharacter({Meteor}) {
    return Meteor.user().character();
  },

  getLevel({Meteor}) {
    return Meteor.user().character().level();
  },

  getInventory() {
    return Meteor.user().character().inventory();
  },

  equipItem({Meteor}, itemId) {
    Meteor.call('equipItem', Meteor.user().data.characterId, itemId, function (err) {
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

  selectWorkout({Meteor}, workout) {
    Meteor.call('selectWorkout', workout._id, function(err) {
      if(err) console.log(err);
    });
  },

  getCurrentWorkout({Meteor}) {
    return Meteor.user().currentWorkout()
  }
}