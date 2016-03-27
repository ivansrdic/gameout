import {Characters} from '/collections';

export default {
  getCharacter({Meteor}) {
    return Meteor.user().character();
  },

  equipItem({Meteor}, itemId) {
    Meteor.call('equipItem', Meteor.user().data.characterId, itemId);
  },

  unEquipItem({Meteor}, itemId) {
    Meteor.call('unEquipItem', Meteor.user().data.characterId, itemId);
  }
}