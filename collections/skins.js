let Skins = new Mongo.Collection('skins');

const SkinSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String
  }
});

Skins.attachSchema(SkinSchema);

export default Skins;

