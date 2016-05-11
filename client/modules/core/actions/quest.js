import {Quests} from '/collections';

export default {
  getQuest() {
    return Quests.findOne();
  },

  beginQuest({Meteor}, quest, group) {
    quest = Quests.findOne();

    Meteor.call('quest.beginQuest', quest._id, group._id, function(err) {
      if(err) console.log(err);
    });
  }
}
