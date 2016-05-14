import {Meteor} from 'meteor/meteor';
import {Workouts, Users, Characters, Levels, Items, Skins} from '/collections';

export default function() {
  Meteor.methods({
    'character.equipItem'(characterId, itemId) {

      let character = Characters.findOne(characterId);
      if (this.userId != character.ownerId || character.inventoryIds.indexOf(itemId) == -1){
        throw new Meteor.Error("character.equipItem.unauthorized");
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
        throw new Meteor.Error("character.equipSkin.unauthorized");
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

      //Items.find({set: {$in: [1, 2]}}).forEach((item) => {
      //  Meteor.call('character.addItemToInventory', characterId, item._id, (err) => {if(err) console.log(err);});
      //});

      Users.update(this.userId, {$set: {"data.characterId": characterId}});
      console.log(user);
      if (user.userInfo.gender == "male") {
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Home routine"})._id);
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Core routine"})._id);
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Can't walk"})._id);
      }
      else {
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Home routine Women"})._id);
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Full body routine Women"})._id);
        Meteor.call("workout.subscribeToWorkout", Workouts.findOne({name: "Can't walk Women"})._id);
      }
    },

    'character.addItemToInventory'(characterId, itemId) {
      let character = Characters.findOne(characterId);
      if (this.userId != character.ownerId){
        throw new Meteor.Error("character.addItemToInventory.unauthorized");
      }

      Characters.update(characterId, {$addToSet: {inventoryIds: itemId}});
    },
    
    'character.reward'(characterId, experience, gold) {
      const character = Characters.findOne(characterId);

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
        Characters.update(character._id, {$inc: 
          {
            "stats.strength": 1,
            "stats.agility": 1,
            "stats.stamina": 1,
            "stats.intelligence": 1
          }
        });
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
    },

    'character.buyItem'(itemId) {
      let user = Users.findOne(this.userId);
      let item = Items.findOne(itemId);

      if (user.character().stats.gold < item.price)
        throw new Meteor.Error("character.buyItem", "not enough gold to buy item");

      Characters.update(user.character()._id, {$inc: {"stats.gold": -item.price}});
      Meteor.call("character.addItemToInventory", user.character()._id, itemId);
    }

  });
}
