export default {
  getGroup({Meteor}) {
    return Meteor.user().group();
  },

  getQuest({Meteor}) {
    return Meteor.user().group().quest();
  },

  getOwner({Meteor}) {
    return Meteor.user().group().owner();
  },

  getMembers({Meteor}) {
    return Meteor.user().group().members();
  },

  addUserToGroup({Meteor}, username) {
    Meteor.call('group.addUserToGroup', username, function(err) {
      if(err) console.log(err);
    });
  },

  removeUserFromGroup({Meteor}, user) {
    Meteor.call('group.removeUserFromGroup', user._id, function(err) {
      if(err) console.log(err);
    });
  }
}
