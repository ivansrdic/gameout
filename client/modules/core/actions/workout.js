export default {
    //TODO: add workout to workouts collection
    createWorkout({}, workoutGroup) {
        console.log(workoutGroup);
    },

    getExercises({}, workout) {
      return workout.exercises();
    },

    getWorkouts({Meteor}) {
      return Meteor.user().workouts();
    }
}
