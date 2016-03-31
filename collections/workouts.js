import {Exercises} from './';
import {Users} from './';

let Workouts = new Mongo.Collection('workouts');

const WorkoutsSchema = new SimpleSchema({
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

Workouts.attachSchema(WorkoutsSchema);

Workouts.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  },
  exercises() {
    return Exercises.find({_id: {$in: this.exerciseIds}});
  }
});

export default Workouts;

