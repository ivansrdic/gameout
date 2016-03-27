export default {
  //TODO: add workout to workouts collection
  createWorkout({}, workout) {
    console.log(workout);
  },
  
  workoutNameValidation({LocalState}, value) {

    value = value.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    let errors = LocalState.get("CREATE_WORKOUT_ERRORS");
    errors = errors ? errors : {};

    let setError = function(status, message) {
      errors.workoutNameValidation = {status, message};
      LocalState.set("CREATE_WORKOUT_ERRORS", errors);
    };

    if (value == null) {
      setError("error", "This is a required input.");
      return;
    }

    if (isNaN(value) == false) {
      setError("warning", "You can name your workout with numbers, but is it intuitive?");
      return;
    }

    setError("success", "");
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_WORKOUT_ERRORS', null);
  }
}