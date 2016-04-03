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
    }
  });
}
