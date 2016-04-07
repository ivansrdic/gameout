import {Meteor} from 'meteor/meteor';
import {Levels} from '/collections';

export default function() {
  Meteor.publish('levels', function() {
    if(this.userId)
      return Levels.find();
    else
      return this.ready();
  });
}
