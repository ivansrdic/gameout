import {Meteor} from 'meteor/meteor';
import {Users, Characters, Levels, Items, Skins} from '/collections';

export default function() {
  Meteor.methods({
    'character.equipItem'(characterId, itemId) {

      let character = Characters.findOne(characterId);
      if (this.userId != character.ownerId || character.inventoryIds.indexOf(itemId) == -1){
        throw Meteor.Error("character.equipItem.unauthorized");
      }

      const type = Items.findOne({_id: itemId}).type;

      if (itemId != character.equipment[type + "Id"]) {
        Characters.update(
          characterId,
          {$set: {["equipment." + type + "Id"]: itemId}}
        );
      }
      else {
        Characters.update(
          characterId,
          {$unset: {["equipment." + type + "Id"]: ""}}
        );
      }

    },

    'character.equipSkin'(characterId, skinId) {

      let character = Characters.findOne(characterId);
      if (this.userId != character.ownerId){
        throw Meteor.Error("character.equipSkin.unauthorized");
      }

      const type = Skins.findOne({_id: skinId}).type;

      if (skinId != character.appearance[type + "Id"]) {
        Characters.update(
          characterId,
          {$set: {["appearance." + type + "Id"]: skinId}}
        );
      }
      else {
        Characters.update(
          characterId,
          {$unset: {["appearance." + type + "Id"]: ""}}
        );
      }

    },

    'character.createCharacter'() {
      let user = Users.findOne(this.userId);
      if (user.data.characterId) {
        throw new Meteor.Error("character.createCharacter.unauthorized");
      }

      let character = {
        ownerId: this.userId,
        equipment: {},
        appearance: {
          hairId: Skins.findOne({name: "hair1"})._id,
          torsoId: Skins.findOne({name: "torso1"})._id,
          legsId: Skins.findOne({name: "legs1"})._id,
          colorId: Skins.findOne({name: "color1"})._id
        },
        stats: {}
      };
      
      const characterId = Characters.insert(character);

      Items.find({set: {$in: [1, 2]}}).forEach((item) => {
        Meteor.call('character.addItemToInventory', characterId, item._id, (err) => {if(err) console.log(err);});
      });

      Users.update(this.userId, {$set: {"data.characterId": characterId}});
    },

    'character.addItemToInventory'(characterId, itemId) {
      let character = Characters.findOne(characterId);
      if (this.userId != character.ownerId){
        throw Meteor.Error("character.addItemToInventory.unauthorized");
      }

      Characters.update(characterId, {$addToSet: {inventoryIds: itemId}});
    },
    
    'character.reward'(experience, gold) {
      const character = Characters.findOne({ownerId: this.userId});

      const level = character.level();

      if((character.stats.experience + experience) >= level.experience) {
        Characters.update(character._id,
          {
            $set: {
              "stats.experience": (character.stats.experience + experience) - level.experience,
              "stats.level": character.stats.level + 1,
              "stats.gold": character.stats.gold + gold
            }
          }
        );
      } else {
        Characters.update(character._id,
          {
            $set: {
              "stats.experience": character.stats.experience + experience,
              "stats.gold": character.stats.gold + gold
            }
          }
        );
      }
      

    }

  });
}
