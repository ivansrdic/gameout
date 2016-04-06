import {Characters} from './';
import {Exercises} from './';
import {Workouts} from './';

let Users = Meteor.users;

const ProfileSchema =  new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  name: {
    type: String
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  }
});

const UserInfoSchema = new SimpleSchema({
  age: {
    type: Number,
    min: 1
  },
  weight: {
    type: Number,
    min: 1
  },
  height: {
    type: Number,
    min: 1
  },
  gender: {
    type: String,
    allowedValues: ["male", "female"]
  },
  level: {
    type: String,
    allowedValues: ["beginner", "intermediate", "advanced"]
  }
});

const UserDataSchema = new SimpleSchema({
  characterId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  exerciseIds: {
    type: [String],
    defaultValue: []
  },
  workoutIds: {
    type: [String],
    defaultValue: [],
    minCount: 0
  },
  selectedWorkoutId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  userInfo: {
    type: UserInfoSchema,
    optional: true
  }
});

const UserSchema = new SimpleSchema({
  username: {
    type: String,
    optional: true
  },
  emails: {
    type: Array,
    optional: true
  },
  "emails.$": {
    type: Object
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  profile: {
    type: ProfileSchema,
    optional: true
  },
  data: {
    type: UserDataSchema
  }
});

Users.attachSchema(UserSchema);

Users.helpers({
  character() {
    return Characters.findOne(this.data.characterId);
  },
  exercises() {
    return Exercises.find({_id: {$in: this.data.exerciseIds}});
  },
  workouts() {
    return Workouts.find({_id: {$in: this.data.workoutIds}});
  },
  selectedWorkout() {
    if (!this.data.selectedWorkoutId) return undefined;
    return Workouts.findOne(this.data.selectedWorkoutId);
  },
  userInfo() {
    // This may be very bugs funny.
    return !this.data.userInfo ? null : {
      age: this.data.userInfo.age,
      gender: this.data.userInfo.gender,
      height: this.data.userInfo.height,
      level: this.data.userInfo.level,
      weight: this.data.userInfo.weight
    }
  }
});

export default Users;
