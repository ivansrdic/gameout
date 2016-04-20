import {Meteor} from 'meteor/meteor';
import {Users, Exercises, Workouts} from '/collections';

export default function() {
  Meteor.methods({
    'exercise.addExercise'(exercise) {

      exercise.ownerId = this.userId;
      const exerciseId = Exercises.insert(exercise);

      Users.update(
        exercise.ownerId,
        {$addToSet: {"data.exerciseIds": exerciseId}}
      );
      return exerciseId;
    },

    'exercise.removeExercise'(exerciseId) {

      let ownerId = Exercises.findOne(exerciseId).ownerId;
      if (this.userId != ownerId)
        throw Meteor.Error("exercise.removeExercise.unauthorized");

      Exercises.remove(exerciseId);
    
      Users.update(ownerId, {$pull: {"data.exerciseIds": exerciseId}});

      let groups = Workouts.find({exerciseIds: exerciseId});

      groups.forEach((group) => {
        Meteor.call('workout.removeExerciseFromWorkout', group._id, exerciseId);
      });
    }
  });
}
