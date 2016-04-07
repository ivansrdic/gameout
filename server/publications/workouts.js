import {Meteor} from 'meteor/meteor';
import {Workouts} from '/collections';

export default function() {
  Meteor.publish('workouts', function() {
    if(this.userId)
      return Workouts.find({ownerId: this.userId});
    else
      return this.ready();
  });
}
