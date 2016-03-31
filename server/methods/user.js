import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

export default function() {
  Meteor.methods({
    'user.createUserInfo'(userInfo) {
      check(userInfo.age, 123);
      check(userInfo.weight, Match.Integer);
      check(userInfo.height, Match.Integer);
      check(userInfo.gender, Match.OneOf("male", "female"));
      check(userInfo.level, Match.OneOf("beginner", "intermediate", "advanced"));

    //  Insert stuff!
    }
  });
}