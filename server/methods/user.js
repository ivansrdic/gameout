import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {Users, Workouts, Exercises, Quests} from '/collections';

export default function() {
  Meteor.methods({
    //userInfo must contain age, weight, height, gender, level
    'user.updateUserInfo'(userInfo) {
      Accounts.setUsername(this.userId, userInfo.username);
      Users.update(this.userId, {$set: {
        "data.userInfo": userInfo
      }});
    },

    //profile info must contain email, name, first_name, last_name
    'user.updateUserProfile'(profileInfo) {
      Users.update(this.userId, {$set: {"profile": profileInfo}});
    },

    // can be used for selecting and unselecting a workout
    'user.selectWorkout'(workoutId) {
      /*if (this.userId != Workouts.findOne(workoutId).ownerId) {
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }*/
      let user = Users.findOne(this.userId);
      if (!user.data.currentWorkout.currentWorkoutId || user.data.currentWorkout.currentWorkoutId != workoutId) {
        Users.update(this.userId, {$set: {"data.currentWorkout.currentWorkoutId": workoutId}});
      }
      else {
        //Meteor.call('character.reward', 50, 10);
        Users.update(this.userId, {$unset: {"data.currentWorkout.currentWorkoutId": ""}});
        Users.update(this.userId, {$set: {"data.currentWorkout.completedExerciseIds": []}});
      }
    },

    // can be used for selecting and unselecting 
    'user.selectExercise'(exerciseId) {
      let user = Users.findOne(this.userId);
      let workout = Workouts.findOne(user.data.currentWorkout.currentWorkoutId);

      /*if (this.userId != workout.ownerId || this.userId != Exercises.findOne(exerciseId).ownerId) {
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }*/

      if (workout.exerciseIds.indexOf(exerciseId) == -1) {
        throw new Meteor.Error("user.selectWorkout.unauthorized");
      }

      

      if (user.data.currentWorkout.completedExerciseIds.indexOf(exerciseId) == -1) {
        Users.update(this.userId, {$push: {"data.currentWorkout.completedExerciseIds": exerciseId}});
        //Meteor.call('character.reward', 20, 5);
      }
      else {
        Users.update(this.userId, {$pull: {"data.currentWorkout.completedExerciseIds": exerciseId}});
        //Meteor.call('character.reward', -20, -5);
      }
    },

    'user.finishWorkout'() {
      let user = Users.findOne(this.userId);
      let currentWorkout = user.currentWorkout();
      let experience = 20 * currentWorkout.completedExercises.count();
      experience += 0.5 * experience * currentWorkout.completedExercises.count() / currentWorkout.workout.exercises().count();
      let gold = experience / 4;

      Meteor.call('character.reward', user.character()._id, Math.round(experience), Math.round(gold));
      if (user.group().quest())
        Meteor.call('quest.fightBoss');
      Meteor.call('user.selectWorkout', currentWorkout.workout._id);
    }

  });
}
