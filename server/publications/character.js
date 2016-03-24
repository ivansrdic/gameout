import {Meteor} from 'meteor/meteor';
import {Characters} from '/collections';

export default function() {
  Meteor.publish('character', function() {
    if(this.userId)
      return Characters.find({owner: this.userId});
  });
}