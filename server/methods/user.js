import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Users, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    //userInfo must contain age, weight, height, gender AND level :P
    //TODO: fix dat
    'user.updateUserInfo'(userInfo) {
      const username = userInfo.username;
      delete userInfo.username;
      Users.update(this.userId, {$set: {
        "username": username,
        "data.userInfo": userInfo
      }});
    },

    //profile info must contain email, name, first_name, last_name
    'user.updateUserProfile'(profileInfo) {
      Users.update(this.userId, {$set: {"profile": profileInfo}});
    },

    // can be used for selecting and unselecting a workout
    'selectWorkout'(workoutId) {
      if (this.userId != Workouts.findOne(workoutId).ownerId) {
        throw Meteor.Error("user.selectWorkout.unauthorized");
      }
      let user = Users.findOne(this.userId);
      if (!user.data.selectedWorkoutId || user.data.selectedWorkoutId != workoutId) {
        Users.update(this.userId, {$set: {"data.selectedWorkoutId": workoutId}});
      }
      else {
        Users.update(this.userId, {$unset: {"data.selectedWorkoutId": ""}});
      }
    }

  });
}
