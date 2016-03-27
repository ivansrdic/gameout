let Skins = new Mongo.Collection('skins');

const SkinSchema = new SimpleSchema({
  type: {
    type: String
  },
  name: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  set: {
    type: Number
  }
});

Skins.attachSchema(SkinSchema);

export default Skins;

