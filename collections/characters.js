let Characters = new Mongo.Collection('characters');

const EquipmentSchema = new SimpleSchema({
  head: {
    type: Number
  },
  chest: {
    type: Number
  },
  leftHand: {
    type: Number
  },
  rightHand: {
    type: Number
  }
});

//TODO: helpers for foreign key
const CharacterSchema = new SimpleSchema({
  owner: {
    type: String
  },
  age: {
    type: Number
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  level: {
    type: String
  },
  gender: {
    type: String
  },
  equipment: {
    type: EquipmentSchema
  }
});

Characters.attachSchema(CharacterSchema);

Characters.allow({
  insert: function(userId, doc) {
    return true;
  },
  update: function(userId, docs, fields, modifier) {
    return true;
  },
  remove: function(userId, docs) {
    return false;
  }
});

export default Characters;
