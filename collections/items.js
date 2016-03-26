let Items = new Mongo.Collection('items');

const ItemSchema = new SimpleSchema({
  name: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  price: {
    type: Number
  }
});

Items.attachSchema(ItemSchema);

export default Items;

