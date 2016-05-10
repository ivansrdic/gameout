import {Quests, Users, Characters} from './';

const Groups = new Mongo.Collection('groups');

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
    return Users.find({_id: {$in: this.memberIds}});
  }
});

export default Groups;
//korisnik dobije grupu kad se registrira
//remove user from group
//add user to group(ako si vlasnik), invite u tom
//database.js brise grupe
//begginQuest
//damaganje bossa i davanje experinca u selectworkout
//publicationi za to dvoje
