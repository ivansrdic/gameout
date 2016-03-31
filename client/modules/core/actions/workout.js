import Validation, {Utils} from './validation-utility';

const stateKey = "CREATE_WORKOUT_ERRORS";

export default {
  stateKey() {
    return stateKey;
  },

  nameValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "nameValidation");

    if(Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    validation.success();
  },

  descriptionValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "descriptionValidation");

    if(Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    validation.success();
  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  },

  createWorkout({LocalState}, workout) {
    if(Utils.hasErrors(LocalState.get(stateKey)))
      return;

    Meteor.call('addWorkout', workout);
  },

  getExercises({}, workout) {
    return workout.exercises();
  },

  getWorkouts({Meteor}) {
    return Meteor.user().workouts();
  }
};
