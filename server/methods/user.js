import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Users, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    //userInfo must contain age, weight, height, gender AND level :P
    'user.updateUserInfo'(userInfo) {
      Users.update(this.userId, {$set: {"data.userInfo": userInfo}});
    },

    //profile info must contain email, name, first_name, last_name
    'user.updateUserProfile'(profileInfo) {
      Users.update(this.userId, {$set: {"profile": profileInfo}});
    }

  });
}
