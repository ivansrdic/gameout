let Users = Meteor.users;

const ProfileSchema =  new SimpleSchema({
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
  },
  character: {
    type: String,
    optional: true
  }
});

const UserSchema = new SimpleSchema({
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
  }
});

Users.attachSchema(UserSchema);

Users.allow({
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

export default Users;