import {Meteor} from 'meteor/meteor';
import {Characters} from '/collections';
import {Users} from '/collections';

export default function() {
  Meteor.publish('character', function() {
    if(this.userId)
      return Characters.find(Users.findOne(this.userId).data.characterId);
  });
}
