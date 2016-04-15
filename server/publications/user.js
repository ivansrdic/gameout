import {Meteor} from 'meteor/meteor';
import {Users, Characters, Workouts, Exercises} from '/collections';

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
        find: function() {
          if(this.userId)
            return Characters.find(
              {ownerId: this.userId},
              {
                fields: {
                  stats: 1
                }
              }
            );
          else
            return this.ready();
        }
      },
      {
        find: function() {
          if(this.userId)
            return Workouts.find({ownerId: this.userId});
          else
            return this.ready();
        }
      },
      {
        find: function() {
          if(this.userId)
            return Exercises.find({ownerId: this.userId});
          else
            return this.ready();
        }
      }
    ]
  });
}
         
