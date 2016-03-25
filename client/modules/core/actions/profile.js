import {Characters} from '/collections';

export default {
  getCharacter({Meteor}) {
    return Characters.findOne(Meteor.user().profile.character);
  },

  equipItem({Meteor}, type, set) {
    Characters.update(
      Meteor.user().profile.character,
      {$set: {["equipment." + type]: set}}
    );
  },

  unEquipItem({Meteor}, type) {
    Characters.update(
      Meteor.user().profile.character,
      {$set: {["equipment." + type]: 0}}
    );
  }
}