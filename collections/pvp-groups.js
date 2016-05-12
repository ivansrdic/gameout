import {Quests, Users, Characters} from './';

const PvPGroups = new Mongo.Collection('PvPGroups');

const DamageSchema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  damageToEnemy: {
    type: Number,
    min: 0
  }
});

const RewardsSchema = new SimpleSchema({
  experience: {
    type: Number,
    defaultValue: 100
  },
  gold: {
    type: Number,
    defaultValue: 25
  },
  itemId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
});


const PvPGroupSchema = new SimpleSchema({
  firstPlayerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  secondPlayerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  firstPlayerHealth: {
    type: Number,
    min: 0
  },
  secondPlayerHealth: {
    type: Number,
    min: 0
  },
  damageHistory: {
    type: [DamageSchema],
    defaultValue: []
  },
  rewards: {
    type: RewardsSchema
  }

});

PvPGroups.attachSchema(PvPGroupSchema);

PvPGroups.helpers({
  owner() {
    return Users.findOne(this.ownerId)
  },

  firstPlayer() {
    return Users.findOne(this.firstPlayerId);
  },

  secondPlayer() {
    return Users.findOne(this.secondPlayerId);
  }
});

export default PvPGroups;
