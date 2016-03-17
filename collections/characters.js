Characters = new Mongo.Collection('characters');

CharacterSchema = new SimpleSchema({
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