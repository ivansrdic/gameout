import Validation, {Utils} from './validation-utility';

const stateKey = "CREATE_EXERCISE_ERRORS";

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

  unitValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "unitValidation");

    if(Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    if(!Utils.isNumeric(value)) {
      validation.error(Utils.NUMERIC);
      return;
    }

    validation.success();
  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  },

  createExercise({LocalState}, exercise) {
    if(Utils.hasErrors(LocalState.get(stateKey)))
      return;

    Meteor.call('addExercise', exercise);
  },

  getExercises({Meteor}) {
    return Meteor.user().exercises();
  }
};