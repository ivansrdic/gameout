import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Users, Workouts, Exercises} from '/collections';

export default function() {
  Meteor.methods({
    //userInfo must contain age, weight, height, gender, level
    //TODO: fix dat
    'user.updateUserInfo'(userInfo) {
      Users.update(this.userId, {$set: {
        "username": userInfo.username,
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
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }
      let user = Users.findOne(this.userId);
      if (!user.data.currentWorkout.selectedWorkoutId || user.data.currentWorkout.selectedWorkoutId != workoutId) {
        Users.update(this.userId, {$set: {"data.currentWorkout.selectedWorkoutId": workoutId}});
      }
      else {
        Users.update(this.userId, {$unset: {"data.currentWorkout.selectedWorkoutId": ""}});
        Users.update(this.userId, {$set: {"data.currentWorkout.completedExerciseIds": []}});
      }
    },

    // can be used for selecting and unselecting 
    'selectExercise'(exerciseId) {
      let user = Users.findOne(this.userId);
      let workout = Workouts.findOne(user.data.currentWorkout.selectedWorkout);

      if (this.userId != workout.ownerId || this.userId != Exercises.findOne(exerciseId).ownerId) {
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }

      if (workout.exerciseIds.indexOf(exerciseId) == -1) {
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }

      if (user.data.currentWorkout.completedExerciseIds.indexOf(exerciseId) == -1) {
        Users.update(this.userId, {$push: {"data.currentWorkout.completedExerciseIds": exerciseId}});
      }
      else {
        Users.update(this.userId, {$pull: {"data.currentWorkout.completedExerciseIds": exerciseId}});
      }
    }

  });
}
