import {Meteor} from 'meteor/meteor';
import {Characters, Items} from '/collections';

export default function() {
  Meteor.methods({
    'equipItem'(characterId, itemId) {

      const type = Items.findOne({_id: itemId}).type;

      Characters.update(
        characterId,
        {$set: {["equipment." + type + "Id"]: itemId}}
      );
    },

    'unEquipItem'(characterId, itemId) {

      const type = Items.findOne({_id: itemId}).type;

      Characters.update(
        characterId,
        {$set: {["equipment." + type + "Id"]: 0}}
      );
    }
  });
}
