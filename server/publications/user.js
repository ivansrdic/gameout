import {Meteor} from 'meteor/meteor';
import {Users, Workouts, Exercises} from '/collections';

export default function() {
  Meteor.publishComposite('user', {
    find: function() {
      if(this.userId)
        return (
          Users.find(this.userId,
            {
              fields: {
                services: 0,
                emails: 0,
                createdAt: 0
              }
            }
          )
        );
      else
        return this.ready();
    },
    children: [
      {
        find: function(post) {
          if(this.userId)
            return Workouts.find({ownerId: this.userId});
          else
            return this.ready();
        }
      },
      {
        find: function(post) {
          if(this.userId)
            return Exercises.find({ownerId: this.userId});
          else
            return this.ready();
        }
      }
    ]
  });
}
         
