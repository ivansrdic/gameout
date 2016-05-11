import {Groups} from '/collections';

export default {
  getGroup() {
    return Groups.findOne();
  },

  getQuest() {
    const group = Groups.findOne();
    if(group) return group.quest();
  },

  getOwner() {
    const group = Groups.findOne();
    if(group) return group.owner();
  },

  getMembers() {
    const group = Groups.findOne();
    if(group) return group.members();
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
