import {Characters} from './';
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
  }
});

const UserDataSchema = new SimpleSchema({
  characterId: {
    type: String,
  },
  age: {
    type: Number
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  gender: {
    type: String
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
  },
  data: {
    type: UserDataSchema,
    optional: true
  }
});

Users.attachSchema(UserSchema);

Users.helpers({
  character() {
    return Characters.findOne(this.data.characterId);
  }
});

export default Users;
