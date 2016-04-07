import {Meteor} from 'meteor/meteor';
import {Skins} from '/collections';

export default function() {
  Meteor.publish('skins', function() {
    if(this.userId)
      return Skins.find();
    else
      return this.ready();
  });
}
