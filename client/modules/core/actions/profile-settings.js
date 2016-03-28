import {Characters} from '/collections';
import Validation, {Utils} from './validation-utility';

const stateKey = "EDIT_INFO_ERRORS";

export default {
  stateKey() {
    return stateKey;
  },

  completeSetup(userData) {
    // TODO: display error on character creation
    const characterId = Characters.insert(userData, function (err) {
      console.log(err);
    });
    Meteor.users.update(Meteor.userId(), {$set: {"profile.character": characterId}}, function (err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  ageValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "ageValidation");

    if (Utils.isPositiveInteger(value)) {
      validation.error(Utils.POSITIVE_NUMBER);
      return;
    }

    if (value > 150) {
      validation.warning("Are you sure this is your age?");
      return;
    }

    validation.success();
  },

  heightValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "heightValidation");

    if (Utils.isPositiveInteger(value)) {
      validation.error(Utils.POSITIVE_NUMBER);
      return;
    }

    if (value > 240) {
      validation.warning("Are you sure this is your height?");
      return;
    }

    validation.success();
  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  }
}