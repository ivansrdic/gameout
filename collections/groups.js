import Quests from './';
import Users from './';
import Characters from './';

const Groups = new Mongo.Collection('groups');

const GroupSchema = new SimpleSchema({
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  questId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  },
  memberIds: {
    type: [String]
  }
});

Groups.attachSchema(GroupSchema);

Groups.helpers({
  owner() {
    return Users.findOne(this.ownerId)
  },
  quest() {
    return Quests.findOne(this.questId);
  },
  members() {
    return Characters.find({_id: {$in: this.memberIds}});
  }
});

export default Groups;