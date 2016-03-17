Profile =  new SimpleSchema({
  email: {
    type: String,
    optional: true
  },
  name: {
    type: String,
    optional: true
  },
  first_name: {
    type: String,
    optional: true
  },
  last_name: {
    type: String,
    optional: true
  }
});



User = new SimpleSchema({
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
    type: Profile,
    optional: true
  }
});

Meteor.users.attachSchema(User);
