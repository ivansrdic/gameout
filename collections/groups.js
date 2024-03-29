import {Quests, Users, Characters} from './';

const Groups = new Mongo.Collection('groups');

const DamageSchema = new SimpleSchema({
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  damageToBoss: {
    type: Number,
    min: 0
  },
  damageFromBoss: {
    type: Number,
    min: 0
  }
});
const GroupSchema = new SimpleSchema({
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  questId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  memberIds: {
    type: [String]
  },
  damageHistory: {
    type: [DamageSchema],
    defaultValue: []
  },
  currentBossHealth: {
    type: Number,
    min: 0,
    optional: true
  },
  lastQuestNumber: {
    type: Number,
    min: 0,
    defaultValue: 0
  }
});

Groups.attachSchema(GroupSchema);

Groups.helpers({
  owner() {
    return Users.findOne(this.ownerId)
  },
  quest() {
    if (!this.questId) return undefined;
    return Quests.findOne(this.questId);
  },
  members() {
    return Users.find({_id: {$in: this.memberIds}});
  }
});

export default Groups;
