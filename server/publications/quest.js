import {Meteor} from 'meteor/meteor';
import {Quests} from '/collections';

export default function() {
  Meteor.publish('quests', function() {
    if(this.userId)
      return Quests.find();
    else
      return this.ready();
  });
}
