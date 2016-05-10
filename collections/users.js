import {Characters, Exercises, Workouts, Groups} from './';

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

const CurrentWorkoutSchema = new SimpleSchema({
  currentWorkoutId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  completedExerciseIds: {
    type: [String],
    defaultValue: [],
    minCount: 0
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
  groupId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  currentWorkout: {
    type: CurrentWorkoutSchema
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

  // returns object with properties workout and completedExercises
  currentWorkout() {
    if (!this.data.currentWorkout.currentWorkoutId) return undefined;
    return {
      workout: Workouts.findOne(this.data.currentWorkout.currentWorkoutId),
      completedExercises: Exercises.find({_id: {$in: this.data.currentWorkout.completedExerciseIds}})
    }
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
  },

  group() {
    if (!this.data.groupId) return undefined;
    return Groups.findOne(this.data.groupId);
  }
});

export default Users;
