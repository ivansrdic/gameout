import {Characters} from '/collections';

export default {
  equipItem(type, set) {
    Characters.update(
      Meteor.user().profile.character,
      {$set: {["equipment." + type]: set}}
    );
  },

  unEquipItem(type) {
    Characters.update(
      Meteor.user().profile.character,
      {$set: {["equipment." + type]: 0}}
    );
  }
}