let Items = new Mongo.Collection('items');

const StatsSchema = new SimpleSchema({
  strength: {
    type: Number,
    min: 0,
    defaultValue: 0
  },
  stamina: {
    type: Number,
    min: 0,
    defaultValue: 0
  },
  agility: {
    type: Number,
    min: 0,
    defaultValue: 0
  },
  intelligence: {
    type: Number,
    min: 0,
    defaultValue: 0
  }
});

const ItemSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: ["head", "chest", "leftHand", "rightHand"]
  },
  name: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  set: {
    type: Number
  },
  stats: {
    type: StatsSchema
  }
});

Items.attachSchema(ItemSchema);

export default Items;

