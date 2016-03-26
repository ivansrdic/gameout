import {Meteor} from 'meteor/meteor';
import {ExerciseGroups} from '/collections';

export default function() {
  Meteor.publish('exercise-groups', function() {
    if(this.userId)
      return ExerciseGroups.find({ownerId: this.userId});
  });
}
