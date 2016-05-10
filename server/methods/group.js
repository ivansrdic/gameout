import {Meteor} from 'meteor/meteor';
import {Groups, Users, Characters, Levels, Items, Skins} from '/collections';


export default function() {
  Meteor.methods({
    'group.createGroup'(userId) {
      let user = Users.findOne(userId);

      if (user.group())
        throw new Meteor.Error("group.createGroup.unauthorized", "group can only be created if user has no group");

      let group = {
        ownerId: userId,
        memberIds: [userId]
      };
      let groupId = Groups.insert(group);
      Users.update(userId, {$set: {"data.groupId": groupId}});
    },

    //other usser is automaticly removed from his original group and added to current user group
    //original group is than deleted could be a PROBLEM !!!!
    'group.addUserToGroup'(username) {
      let otherUser = Users.findOne({username: username});
      let user = Users.findOne(this.userId);

      if (!otherUser)
        throw new Meteor.Error("group.addUserToGroup.undefinedUsername");
      if (user.group().ownerId != this.userId)
        throw new Meteor.Error("group.addUserToGroup.unauthorized");

      Groups.update(user.group()._id, {$addToSet: {memberIds: otherUser._id}});
      Groups.remove(otherUser.group()._id);
      Users.update(otherUser._id, {$set: {"data.groupId": user.group()._id}});
    },

    //TODO: change owner if user leaves his own group
    'group.removeUserFromGroup'(userId) {
      let user = Users.findOne(this.userId);
      let otherUser = Users.findOne(userId); //other user will be removed from the group

      if (otherUser.group().ownerId != this.userId && this.userId != userId || user.group()._id != otherUser.group()._id)
        throw new Meteor.Error("group.removeUserFromGroup.unauthorized");

      if (user.group().memberIds.length == 1)
        Groups.remove(user.group()._id);
      else
        Groups.update(user.group()._id, {$pull: {memberIds: otherUser._id}});

      
      Users.update(otherUser, {$unset: {"data.groupId": ""}});
      Meteor.call("group.createGroup", otherUser._id);
    }

  });
}

      
      
