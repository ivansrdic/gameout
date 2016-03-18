import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.publish('character', function() {
    return Characters.find({owner: this.userId});
  });
}