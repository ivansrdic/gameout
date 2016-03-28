import {Meteor} from 'meteor/meteor';
import {Users, Exercises, ExerciseGroups} from '/collections';

export default function() {
  Meteor.methods({
    'addExercise'(exercise) {

      const exerciseId = Exercises.insert(exercise);

      Users.update(
        exercise.ownerId,
        {$addToSet: {"data.exerciseIds": exerciseId}}
      );
      return exerciseId;
    },

    'removeExercise'(exerciseId) {

      let ownerId = Exercises.findOne(exerciseId).ownerId;
      Exercises.remove(exerciseId);
      
      Users.update(ownerId, {$pull: {"data.exerciseIds": exerciseId}});

      let groups = ExerciseGroups.find({exerciseIds: exerciseId});

      groups.forEach((group) => {
        Meteor.call('removeExerciseFromGroup', group._id, exerciseId);
      });
    }
  });
}
