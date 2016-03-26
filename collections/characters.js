import {Items} from './';
import {Users} from './';
let Characters = new Mongo.Collection('characters');

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

const StatsSchema = new SimpleSchema({
  level: {
    type: Number
  },
  gender: {
    type: String
  },
  experience: {
    type: Number
  },
  gold: {
    type: Number
  }
});

const CharacterSchema = new SimpleSchema({
  ownerId: {
    type: String,
    optional: true
  },
  stats: {
    type: StatsSchema,
  },
  equipment: {
    type: EquipmentSchema
  },
  inventoryIds: {
    type: [String]
  }
});

Characters.attachSchema(CharacterSchema);

Characters.helpers({
  owner() {
    return Users.findOne(ownerId);
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
  }
});

export default Characters;
