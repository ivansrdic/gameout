import {Users} from './';

let Exercises = new Mongo.Collection('exercises');

const ExercisesSchema = new SimpleSchema({
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  unit: {
    type: Number,
    min: 1
  },
  link: {
    type: String,
    optional: true
  },
  gender: {
    type: String,
    allowedValues: ["male", "female", "unisex"],
    defaultValue: "unisex"
  },
  level: {
    type:String,
    allowedValues: ["easy", "medium", "hard"]
  }
});

Exercises.attachSchema(ExercisesSchema);

Exercises.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  }
});

export default Exercises;

