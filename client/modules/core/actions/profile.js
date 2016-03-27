import {Characters} from '/collections';

export default {
  getCharacter({Meteor}) {
    return Meteor.user().character();
  },

  equipItem({Meteor}, type, set) {
    Characters.update(
      Meteor.user().data.characterId,
      {$set: {["equipment." + type + "Id"]: set}}
    );
  },

  unEquipItem({Meteor}, type) {
    Characters.update(
      Meteor.user().data.characterId,
      {$set: {["equipment." + type + "Id"]: 0}}
    );
  }
}