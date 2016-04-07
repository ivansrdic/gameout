import {Meteor} from 'meteor/meteor';
import {Items} from '/collections';

export default function() {
  Meteor.publish('items', function() {
    if(this.userId)
      return Items.find();
    else
      return this.ready();
  });
}
