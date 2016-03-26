import {Meteor} from 'meteor/meteor';
import {Users} from '/collections';

export default function() {
  Meteor.publish('user', function() {
    if(this.userId)
      return (
        Users.find(this.userId,
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
