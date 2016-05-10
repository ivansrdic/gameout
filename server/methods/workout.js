import {Meteor} from 'meteor/meteor';
import {Users, Exercises, Workouts, PublicWorkouts} from '/collections';

export default function() {
  Meteor.methods({
    'workout.addWorkout'(workout) {

      workout.ownerId = this.userId;
      const workoutId = Workouts.insert(workout);
      
      Users.update(
        workout.ownerId,
        {$addToSet: {"data.workoutIds": workoutId}}
      );
      return workoutId;
    },

    'workout.removeWorkout'(workoutId) {

      let ownerId = Workouts.findOne(workoutId).ownerId;
      if (this.userId != ownerId)
        throw new Meteor.Error("workout.removeWorkout.unauthorized");

      Workouts.remove(workoutId);
      
      Users.update(ownerId, {$pull: {"data.workoutIds": workoutId}});

      PublicWorkouts.remove(workoutId);
    },

    'workout.removeExerciseFromWorkout'(workoutId, exerciseId) {
      let workout = Workouts.findOne(workoutId);
      let exercise = Workouts.findOne(workoutId);

      if (workout && exercise) {
        if (workout.ownerId != this.userId || exercise.ownerId != this.userId)
          throw new Meteor.Error("workout.removeExerciseFromWorkout.unauthorized");

        Workouts.update(workoutId, {$pull: {exerciseIds: exerciseId}});
      }
    },

    'workout.addExerciseToWorkout'(workoutId, exerciseId) {
      let workoutOwner = Workouts.findOne(workoutId).ownerId;
      let exerciseOwner = Workouts.findOne(workoutId).ownerId;

      if (workout.ownerId != this.userId || exercise.ownerId != this.userId)
        throw new Meteor.Error("workout.removeExerciseFromWorkout.unauthorized");

      Workouts.update(workoutId, {$addToSet: {exerciseIds: exerciseId}});
    },

    'workout.publishWorkout'(workoutId) {
      if (this.userId != Workouts.findOne(workoutId).ownerId) {
        throw new Meteor.Error("workout.publishWorkout.unauthorized");
      }

      PublicWorkouts.insert({_id: workoutId});
    },

    'workout.unPublishWorkout'(workoutId) {
      if (this.userId != Workouts.findOne(workoutId).ownerId) {
        throw new Meteor.Error("workout.unpublishWorkout.unauthorized");
      }

      PublicWorkouts.remove({_id: workoutId});
    },

    'workout.subscribeToWorkout'(workoutId) {
      if (this.userId == Workouts.findOne(workoutId).ownerId) {
        throw new Meteor.Error("workout.subscribeToWorkout.unauthorized");
      }
      Users.update(
        this.userId,
        {$addToSet: {"data.workoutIds": workoutId}}
      );
    },

    'workout.unSubscribeFromWorkout'(workoutId) {
      if (this.userId == Workouts.findOne(workoutId).ownerId) {
        throw new Meteor.Error("workout.unsubscribeFromWorkout.unauthorized");
      }

      Users.update(
        this.userId,
        {$pull: {"data.workoutIds": workoutId}}
      );
    }

  });
}
