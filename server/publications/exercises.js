import {Meteor} from 'meteor/meteor';
import {Exercises} from '/collections';
import {Users} from '/collections';

export default function() {
  Meteor.publish('exercises', function() {
    if(this.userId)
      return Exercises.find({ownerId: this.userId});
    else
      return this.ready();
  });
}
