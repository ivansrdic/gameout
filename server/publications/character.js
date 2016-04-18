import {Meteor} from 'meteor/meteor';
import {Users, Characters, Items, Skins, Levels} from '/collections';

export default function() {
  Meteor.publishComposite('character', function() {
    let character = Characters.findOne({ownerId : this.userId});
    let characterId = null;
    if(character) characterId = character._id;

    return {
      find: function() {
        if(character) {
          return Characters.find(character._id);
        }
        else
          return this.ready();
      },
      children: [
        {
          find: function() {
            if(character) {
              character = Characters.findOne(characterId);
              return Items.find({_id: {$in: character.inventoryIds}});
            }
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(character) {
              character = Characters.findOne(characterId);
              return Skins.find();
            }
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(character) {
              character = Characters.findOne(characterId);
              return Levels.find({level: character.stats.level});
            }
            else
              return this.ready();
          }
        }
      ]
    };
  });
}
