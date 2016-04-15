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
      validation.warning(Utils.ARE_YOU_SURE);
      return;
    }
    
    validation.success();
  },

  linkValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "linkValidation");

    if(!Utils.isImageOrVideo(value)) {
      validation.error(Utils.IMAGE_OR_VIDEO);
      return;
    }

    if (Utils.isEmpty(value)) {
      validation.warning(Utils.ARE_YOU_SURE);
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

  clearState({LocalState}) {
    LocalState.set(stateKey, null);
  },

  localState({LocalState}) {
    return LocalState.get(stateKey) || {};
  },

  createExercise({LocalState}, exercise, resetForm) {
    if (Utils.hasErrors(LocalState.get(stateKey)))
      return;

    Meteor.call('addExercise', exercise, function (err) {
      const validation = new Validation(LocalState, stateKey, "globalMessage");
      if(err) {
        validation.error(err.reason);
      } else {
        resetForm();
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