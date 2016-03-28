import {Meteor} from 'meteor/meteor';
import {Users, Exercises, ExerciseGroups} from '/collections';

export default function() {
  Meteor.methods({
    'addExerciseGroup'(exerciseGroup) {

      const exerciseGroupId = ExerciseGroups.insert(exerciseGroup);
      
      Users.update(
        exerciseGroup.ownerId,
        {$addToSet: {"data.exerciseGroupIds": exerciseGroupId}}
      );
      return exerciseGroupId;
    },

    'removeExerciseGroup'(exerciseGroupId) {

      let ownerId = ExerciseGroups.findOne(exerciseGroupId).ownerId;
      ExerciseGroups.remove(exerciseGroupId);
      
      Users.update(ownerId, {$pull: {"data.exerciseGroupIds": exerciseGroupId}});
    },

    'removeExerciseFromGroup'(exerciseGroupId, exerciseId) {
      ExerciseGroups.update(exerciseGroupId, {$pull: {exerciseIds: exerciseId}});
    },

    'addExerciseToGroup'(exerciseGroupId, exerciseId) {
      ExerciseGroups.update(exerciseGroupId, {$addToSet: {exerciseIds: exerciseId}});
    }
  });
}
