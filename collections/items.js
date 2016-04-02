let Items = new Mongo.Collection('items');

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
  }
});

Items.attachSchema(ItemSchema);

export default Items;

