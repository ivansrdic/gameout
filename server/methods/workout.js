import {Meteor} from 'meteor/meteor';
import {Users, Exercises, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    'addWorkout'(workout) {

      const workoutId = Workouts.insert(workout);
      
      Users.update(
        workout.ownerId,
        {$addToSet: {"data.workoutIds": workoutId}}
      );
      return workoutId;
    },

    'removeWorkout'(workoutId) {

      let ownerId = Workouts.findOne(workoutId).ownerId;
      Workouts.remove(workoutId);
      
      Users.update(ownerId, {$pull: {"data.workoutIds": workoutId}});
    },

    'removeExerciseFromWorkout'(workoutId, exerciseId) {
      Workouts.update(workoutId, {$pull: {exerciseIds: exerciseId}});
    },

    'addExerciseToWorkout'(workoutId, exerciseId) {
      Workouts.update(workoutId, {$addToSet: {exerciseIds: exerciseId}});
    }
  });
}
