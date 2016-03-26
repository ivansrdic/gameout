import {Exercises} from './';
import {Users} from './';

let ExerciseGroups = new Mongo.Collection('exercise-groups');

const ExerciseGroupSchema = new SimpleSchema({
  ownerId: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  exerciseIds: {
    type: [String]
  }
});

ExerciseGroups.attachSchema(ExerciseGroupSchema);

ExerciseGroups.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  },

  exercises() {
    return Exercises.find({_id: {$in: this.exerciseIds}});
  }
});

export default ExerciseGroups;

