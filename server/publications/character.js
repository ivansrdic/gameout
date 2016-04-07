import {Meteor} from 'meteor/meteor';
import {Users, Characters, Items, Skins, Levels} from '/collections';

export default function() {
  let character = Characters.findOne(Users.findOne(this.userId).data.characterId);
  Meteor.publishComposite('character', {
    find: function() {
      if(this.userId)
        return Characters.find(character._id);
      else
        return this.ready();
    },
    children: [
      { 
        find: function() {
          if(this.userId)
            return Items.find({_id: {$in: character.inventoryIds}});
          else
            return this.ready();
        }
      },
      { 
        find: function() {
          if(this.userId)
            return Skins.find();
          else
            return this.ready();
        }
      },
      {
        find: function() {
          if(this.userId)
            return Levels.find({level: character.stats.level});
          else
            return this.ready();
        }
      }
    ]
  });
}
