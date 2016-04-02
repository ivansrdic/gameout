import {Meteor} from 'meteor/meteor';
import {Users, Exercises, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    'addWorkout'(workout) {

      workout.ownerId = this.userId;
      const workoutId = Workouts.insert(workout);
      
      Users.update(
        workout.ownerId,
        {$addToSet: {"data.workoutIds": workoutId}}
      );
      return workoutId;
    },

    'removeWorkout'(workoutId) {

      let ownerId = Workouts.findOne(workoutId).ownerId;
      if (this.userId != ownerId)
        throw Meteor.Error("workout.removeWorkout.unauthorized");

      Workouts.remove(workoutId);
      
      Users.update(ownerId, {$pull: {"data.workoutIds": workoutId}});
    },

    'removeExerciseFromWorkout'(workoutId, exerciseId) {
      let workout = Workouts.findOne(workoutId);
      let exercise = Workouts.findOne(workoutId);

      if (workout && exercise) {
        if (workout.ownerId != this.userId || exercise.ownerId != this.userId)
          throw Meteor.Error("workout.removeExerciseFromWorkout.unauthorized");

        Workouts.update(workoutId, {$pull: {exerciseIds: exerciseId}});
      }
    },

    'addExerciseToWorkout'(workoutId, exerciseId) {
      let workoutOwner = Workouts.findOne(workoutId).ownerId;
      let exerciseOwner = Workouts.findOne(workoutId).ownerId;

      if (workout.ownerId != this.userId || exercise.ownerId != this.userId)
        throw Meteor.Error("workout.removeExerciseFromWorkout.unauthorized");

      Workouts.update(workoutId, {$addToSet: {exerciseIds: exerciseId}});
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
