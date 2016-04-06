let Levels = new Mongo.Collection('levels');

const LevelSchema = new SimpleSchema({
  level: {
    type: Number,
    unique: true,
    min: 1,
    max: 100
  },
  experience: {
    type: Number
  }
});

Levels.attachSchema(LevelSchema);

export default Levels;

