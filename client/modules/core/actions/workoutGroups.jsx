import {Exercises, ExerciseGroups} from '/collections';


export default {
    //TODO: add workout to workouts collection
    createWorkoutGroup({}, workoutGroup) {
        console.log(workoutGroup);
    },

    // Dev
    listAllWorkouts({Meteor}) {
      return Meteor.user().character().workouts();
    },
    // Dev
    listAllGroupWorkout({Meteor}) {
      return Meteor.user().character().groupWorkouts();
    }
}
