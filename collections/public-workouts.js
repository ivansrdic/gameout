import {Exercises, Users, Workouts} from './';

let PublicWorkouts = new Mongo.Collection('publicWorkouts');

const PublicWorkoutsSchema = new SimpleSchema({
  _id: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  rating: {
    type: Number,
    optional: true,
    decimal: true
  },
  numOfRates: {
    type: Number,
    defaultValue: 0
  },
  numOfSubscribers: {
    type: Number,
    defaultValue: 0
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  }
});

PublicWorkouts.attachSchema(PublicWorkoutsSchema);

PublicWorkouts.helpers({
  workout() {
    return Workouts.findOne(this._id);
  }
});

export default PublicWorkouts;

