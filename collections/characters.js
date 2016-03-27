import {Items} from './';
import {Users} from './';
import {Skins} from './';

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

const AppearenceSchema = new SimpleSchema({
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

const CharacterSchema = new SimpleSchema({
  ownerId: {
    type: String,
    optional: true
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
  appearence: {
    type: AppearenceSchema
  }
});

Characters.attachSchema(CharacterSchema);

Characters.helpers({
  owner() {
    return Users.findOne(this.ownerId);
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
  hair() {
    return Skins.findOne(this.appearence.hairId);
  },
  torso() {
    return Skins.findOne(this.appearence.torsoId);
  },
  legs() {
    return Skins.findOne(this.appearence.legsId);
  },
  color() {
    return Skins.findOne(this.appearence.colorId);
  }
});

export default Characters;
