import Validation, {Utils} from './validation-utility';

const stateKey = "client.modules.core.actions.exercise";

export default {
  stateKey() {
    return stateKey;
  },

  nameValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "nameValidation");

    if (Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    validation.success();
  },
  
  descriptionValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "descriptionValidation");

    if (Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }
    
    validation.success();
  },

  unitValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "unitValidation");

    if (Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    if (!Utils.isNumeric(value)) {
      validation.error(Utils.NUMERIC);
      return;
    }

    validation.success();
  },

  clearErrors({LocalState}) {
    const {globalMessage} = LocalState.get(stateKey);
    LocalState.set(stateKey, {globalMessage});

    setTimeout(function() {
      LocalState.set(stateKey, {});
    }, 2000);
  },

  createExercise({LocalState}, exercise) {
    if (Utils.hasErrors(LocalState.get(stateKey)))
      return;

    Meteor.call('addExercise', exercise, function (err) {
      const validation = new Validation(LocalState, stateKey, "globalMessage");
      if(err) {
        validation.error(err.reason);
      } else {
        validation.success("Exercise successfully added.");
      }
    });
  },

  getExercises({Meteor}) {
    return Meteor.user().exercises();
  },

  removeExercise({}, exercise) {
    Meteor.call('removeExercise', exercise._id, function (err) {
      if (err) console.log(err);
    });
  }
};