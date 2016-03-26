import {Users} from './';

let Exercises = new Mongo.Collection('exercises');

const ExercisesSchema = new SimpleSchema({
  ownerId: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  unit: {
    type: Number
  }
});

Exercises.attachSchema(ExercisesSchema);

Exercises.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  }
});

export default Exercises;

