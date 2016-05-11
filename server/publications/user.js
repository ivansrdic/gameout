import {Meteor} from 'meteor/meteor';
import {Groups, Users, Characters, Levels, Workouts, Exercises} from '/collections';

export default function() {
  Meteor.publishComposite('user', function() {
    const character = Characters.findOne({ownerId: this.userId});
    return {
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
            if(character)
              return Characters.find(character._id);
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(character) {
              return Levels.find({level: character.stats.level});
            }
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(this.userId){
              let user = Users.findOne(this.userId);
              return user.workouts();
            }
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(this.userId){
              let user = Users.findOne(this.userId);
              let exerciseIds = [];
              user.workouts().forEach((workout) => {
                exerciseIds = exerciseIds.concat(workout.exerciseIds)
              });
              return Exercises.find({$or: [{_id: {$in: exerciseIds}}, {ownerId: this.userId}]});
            }
            else
              return this.ready();
          }
        },
        {
          find: function() {
            if(this.userId){
              let user = Users.findOne(this.userId);
              return Groups.find({_id: user.data.groupId});
            }
            else
              return this.ready();
          },
          children: [
            {
              //TODO: nesigurno
              find: function() {
                if(this.userId) {
                  let user = Users.findOne(this.userId);
                  if (!user.group())
                    return this.ready();
                  return user.group().members();
                }
                else
                  return this.ready();
              },
              children: [
                {
                  find: function() {
                    if(this.userId) {
                      let user = Users.findOne(this.userId);
                      if (!user.group())
                        return this.ready();
                      let characterIds = []
                      user.group().members().forEach((member) => {
                        characterIds = characterIds.concat(member.data.characterId);
                      });
                      return Characters.find({_id: {$in: characterIds}});
                    }
                    else
                      return this.ready();

                  }
                }
              ]
            }
          ]
        }
      ]
    }
  });
}
         
