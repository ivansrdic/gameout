ProfileSchema =  new SimpleSchema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

UserSchema = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  email: {
    type: String,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  profile: {
    type: ProfileSchema,
    optional: true
  },
  character: {
    type: CharacterSchema,
    optional: true
  },
  completedSetup: {
    type: Boolean,
    optional: true
  }
});

Meteor.users.attachSchema(UserSchema);

Meteor.users.allow({
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