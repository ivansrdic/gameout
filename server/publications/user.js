import {Meteor} from 'meteor/meteor';

export default function() {
  Meteor.publish('user', function() {
    if(this.userId)
      return (
        Meteor.users.find(this.userId,
          {
            fields: {
              services: 0
            }
          }
        )
      );
    else
      this.ready();
  })
}