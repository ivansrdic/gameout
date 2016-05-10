import {Meteor} from 'meteor/meteor';
import {Workouts, PublicWorkouts, Exercises} from '/collections';

export default function() {
  Meteor.publishComposite('public-workouts', function() {
    return {
      find: function() {
        if(this.userId) {
          return PublicWorkouts.find();
        }
        else
          return this.ready();
      },
      children: [
        {
          find: function() {
            if(this.userId) {
              let workoutIds = [];
              PublicWorkouts.find().forEach((workout) => {
                workoutIds.push(workout._id);
              });
              return Workouts.find({_id: {$in: workoutIds}});
            }
            else
              return this.ready();
          },
          children: [
            {
              find: function() {
                if(this.userId) {
                  let workoutIds = [];
                  PublicWorkouts.find().forEach((workout) => {
                    workoutIds.push(workout._id);
                  });
                  let workouts =  Workouts.find({_id: {$in: workoutIds}});

                  let exerciseIds = [];
                  workouts.forEach((workout) => {
                    exerciseIds = exerciseIds.concat(workout.exerciseIds)
                  });
                  return Exercises.find({_id: {$in: exerciseIds}});
                }
                else
                  return this.ready();
              }
            }
          ]
        }
      ]
    };
  });
}
