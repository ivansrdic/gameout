import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Users, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    //userInfo must contain age, weight, height and gender
    'updateUserInfo'(userInfo) {
      Users.update(this.userId, {$set: {"data.userInfo": userInfo}});
    },

    //profile info must contain email, name, first_name, last_name
    'updateUserProfile'(profileInfo) {
      Users.update(this.userId, {$set: {"profile": profileInfo}});
    }
    
  });
}
