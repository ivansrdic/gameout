import {Items} from './';
import {Users} from './';
import {Skins} from './';
// Dev
import {Exercises} from './';
import {ExerciseGroups} from './';

let Characters = new Mongo.Collection('characters');

const AppearanceSchema = new SimpleSchema({
  hairId: {
    type: String
  },
  torsoId: {
    type: String
  },
  legsId: {
    type: String
  },
  colorId: {
    type: String
  }
});

const StatsSchema = new SimpleSchema({
  strength: {
    type: Number
  },
  stamina: {
    type: Number
  },
  agility: {
    type: Number
  },
  intelligence: {
    type: Number
  },
  health: {
    type: Number
  },
  experience: {
    type: Number
  },
  level: {
    type: Number
  },
  gold: {
    type: Number
  },
  gender: {
    type: String
  }
});

const EquipmentSchema = new SimpleSchema({
  headId: {
    type: String
  },
  chestId: {
    type: String
  },
  leftHandId: {
    type: String
  },
  rightHandId: {
    type: String
  }
});

const CharacterSchema = new SimpleSchema({
  ownerId: {
    type: String,
    optional: true
  },
  appearance: {
    type: AppearanceSchema
  },
  stats: {
    type: StatsSchema
  },
  equipment: {
    type: EquipmentSchema
  },
  inventoryIds: {
    type: [String]
  },
  // Dev
  workoutIds: {
    type: [Exercises]
  },
  groupWorkoutIds: {
    type: [ExerciseGroups]
  }
});

Characters.attachSchema(CharacterSchema);

Characters.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  },
  hair() {
    return Skins.findOne(this.appearance.hairId);
  },
  torso() {
    return Skins.findOne(this.appearance.torsoId);
  },
  legs() {
    return Skins.findOne(this.appearance.legsId);
  },
  color() {
    return Skins.findOne(this.appearance.colorId);
  },
  chest() {
    return Items.findOne(this.equipment.chestId);
  },
  head() {
    return Items.findOne(this.equipment.headId);
  },
  leftHand() {
    return Items.findOne(this.equipment.leftHandId);
  },
  rightHand() {
    return Items.findOne(this.equipment.rightHandId);
  },
  inventory() {
    return Items.find({_id: {$in: this.inventoryIds}});
  },
  // Dev
  workouts() {
    return Exercises.find({_id: {$in: this.workoutIds}});
  },
  groupWorkouts() {
    return ExerciseGroups.find({_id: {$in: this.groupWorkoutIds}});
  }
});

export default Characters;
