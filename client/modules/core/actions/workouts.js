import Validation from './validation-utility';

export default {
  //TODO: add workout to workouts collection
  createWorkout({}, workout) {
    console.log(workout);
  },
  
  nameValidation({LocalState}, value) {
    const validation = new Validation(LocalState, "CREATE_WORKOUT_ERRORS", "nameValidation");

    if (validation.isEmpty(value)) {
      validation.setError("error", "This is a required input.");
      return;
    }

    validation.setError("success", "");
  },
  
  descriptionValidation({LocalState}, value) {
    const validation = new Validation(LocalState, "CREATE_WORKOUT_ERRORS", "descriptionValidation");
    
    if (validation.isEmpty(value)) {
      validation.setError("error", "This is a required input.");
      return;
    }
    
    validation.setError("success", "");
  },
  
  tagsValidation({LocalState}, value) {
    const validation = new Validation(LocalState, "CREATE_WORKOUT_ERRORS", "tagsValidation");

    if (validation.isEmpty(value)) {
      validation.setError("error", "This is a required input.");
      return;
    }
    
    validation.setError("success", "");
  },
  
  tipsValidation({LocalState}, value) {
    const validation = new Validation(LocalState, "CREATE_WORKOUT_ERRORS", "tipsValidation");

    if (validation.isEmpty(value)) {
      validation.setError("error", "This is a required input.");
      return;
    }
    
    validation.setError("success", "");
  },

  clearErrors({LocalState}) {
    return LocalState.set('CREATE_WORKOUT_ERRORS', null);
  }
}