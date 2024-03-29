import {Items, Users, Skins, Levels} from './';

let Characters = new Mongo.Collection('characters');

const AppearanceSchema = new SimpleSchema({
  hairId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  torsoId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  legsId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  colorId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
});

const StatsSchema = new SimpleSchema({
  strength: {
    type: Number,
    min: 3,
    defaultValue: 3
  },
  stamina: {
    type: Number,
    min: 3,
    defaultValue: 3
  },
  agility: {
    type: Number,
    min: 3,
    defaultValue: 3
  },
  intelligence: {
    type: Number,
    min: 3,
    defaultValue: 3
  },
  currentHealth: {
    type: Number,
    min: 0,
    defaultValue: 50
  },
  maxHealth: {
    type: Number,
    min: 0,
    defaultValue: 50
  },
  experience: {
    type: Number,
    min: 0,
    defaultValue: 0
  },
  level: {
    type: Number,
    min: 1,
    max: 100,
    defaultValue: 1
  },
  gold: {
    type: Number,
    min: 0,
    defaultValue: 0
  }
});

const EquipmentSchema = new SimpleSchema({
  headId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  chestId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  leftHandId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  rightHandId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
});

const CharacterSchema = new SimpleSchema({
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
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
    type: [String],
    defaultValue: []
  }
});

Characters.attachSchema(CharacterSchema);

Characters.helpers({
  owner() {
    return Users.findOne(this.ownerId);
  },
  //skins
  hair() {
    if (!this.appearance.hairId) return undefined;
    return Skins.findOne(this.appearance.hairId);
  },
  torso() {
    if (!this.appearance.torsoId) return undefined;
    return Skins.findOne(this.appearance.torsoId);
  },
  legs() {
    if (!this.appearance.legsId) return undefined;
    return Skins.findOne(this.appearance.legsId);
  },
  color() {
    if (!this.appearance.colorId) return undefined;
    return Skins.findOne(this.appearance.colorId);
  },
  allSkins() {
    // Refactor if we agree skins fall under achievements or monetization.
    return Skins.find({});
  },
  allHairs() {
    return Skins.find({"type" : "hair"});
  },
  allTorsos() {
    return Skins.find({"type" : "torso"});
  },
  allLegs() {
    return Skins.find({"type" : "legs"});
  },
  allColors() {
    return Skins.find({"type" : "color"});
  },

  //equipment
  chest() {
    if (!this.equipment.chestId) return undefined;
    return Items.findOne(this.equipment.chestId);
  },
  head() {
    if (!this.equipment.headId) return undefined;
    return Items.findOne(this.equipment.headId);
  },
  leftHand() {
    if (!this.equipment.leftHandId) return undefined;
    return Items.findOne(this.equipment.leftHandId);
  },
  rightHand() {
    if (!this.equipment.rightHandId) return undefined;
    return Items.findOne(this.equipment.rightHandId);
  },

  inventory() {
    return Items.find({_id: {$in: this.inventoryIds}});
  },
  getEquipment() {
    return Items.find({_id: {$in: [this.equipment.chestId, this.equipment.headId, 
                                   this.equipment.leftHandId, this.equipment.rightHandId]}});
  },
  getAppearance() {
    return Skins.find({_id: {$in: [this.appearance.hairId, this.appearance.torsoId,
                                   this.appearance.legsId, this.appearance.colorId]}});
  },

  getTotalStats() {
    let stats = Object.assign({}, this.stats);
    
    this.getEquipment().forEach((item) => {
      stats.strength += item.stats.strength;
      stats.agility += item.stats.agility;
      stats.stamina += item.stats.stamina;
      stats.intelligence += item.stats.intelligence;
    });
    return stats;
  },

  level() {
    return Levels.findOne({level: this.stats.level});
  }
});

export default Characters;
