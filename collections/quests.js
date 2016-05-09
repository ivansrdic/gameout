import Items from './';

const Quests = new Mongo.Collection('quests');

const BossSchema = new SimpleSchema({
  name: {
    type: String
  },
  health: {
    type: Number
  },
  damage: {
    type: Number
  }
});

const TaskSchema = new SimpleSchema({
  name: {
    type: String
  },
  quantity: {
    type: Number
  }
});

const RewardsSchema = new SimpleSchema({
  experience: {
    type: Number
  },
  gold: {
    type: Number
  },
  itemId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  }
});

const QuestSchema = new SimpleSchema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  boss: {
    type: BossSchema,
    optional: true
  },
  task: {
    type: TaskSchema,
    optional: true
  },
  rewards: {
    type: RewardsSchema
  }
});

Quests.attachSchema(QuestSchema);

Quests.helpers({
  item() {
    return Items.findOne(this.rewards.itemId);
  }
});

export default Quests;

