import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.publish('users', function() {
    return Meteor.users.find(this.userId,
      { fields: {
        services: 0
      }}
    );
  })
}