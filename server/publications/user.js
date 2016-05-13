import {Meteor} from 'meteor/meteor';
import {Quests, PvPGroups, Groups, Users, Characters, Levels, Workouts, Exercises} from '/collections';

export default function() {
  Meteor.publishComposite('user', function() {
    const character = Characters.findOne({ownerId: this.userId});
    return {
      //this user
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
          //users character
          find: function() {
            if(character)
              return Characters.find(character._id);
            else
              return this.ready();
          }
        },
        {
          //characters level
          find: function() {
            if(character) {
              return Levels.find({level: character.stats.level});
            }
            else
              return this.ready();
          }
        },
        {
          //users workouts
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
          //users exercises
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
          //users group
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
              //group members (users)
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
                  //characters of group members
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
            },
            {
              //groups quest
              find: function() {
                if(this.userId){
                  let user = Users.findOne(this.userId);
                  if (!user.group() || !user.group().quest())
                    return this.ready();
                  return Quests.find(user.group().quest()._id);
                }
                else
                  return this.ready();
              }
            }
          ]
        },
        {
          //users pvp group
          find: function() {
            if(this.userId) {
              let user = Users.findOne(this.userId);
              if(!user.pvpGroup())
                return this.ready();
              return PvPGroups.find(user.data.pvpGroupId);
            }
            else
              return this.ready();
          },
          children: [
            {
              //opponent in pvp (user)
              find: function() {
                if(this.userId) {
                  let user = Users.findOne(this.userId);
                  if(!user.pvpGroup())
                    return this.ready();
                  if (user.pvpGroup().firstPlayer()._id != this.userId)
                    return Users.find(user.pvpGroup().firstPlayerId);
                  else
                    return Users.find(user.pvpGroup().secondPlayerId);
                }
                else
                  return this.ready();
              },
              children: [
                {
                  //opponents character
                  find: function() {
                    if(this.userId) {
                      let user = Users.findOne(this.userId);
                      if(!user.pvpGroup())
                        return this.ready();
                      if (user.pvpGroup().firstPlayer()._id != this.userId)
                        return Characters.find(Users.findOne(user.pvpGroup().firstPlayerId).character()._id);
                      else
                        return Characters.find(Users.findOne(user.pvpGroup().secondPlayerId).character()._id);
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
         
