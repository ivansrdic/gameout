import {Characters} from '/collections';
import Validation from './validation-utility';

export default {
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
    const validation = new Validation(LocalState, "EDIT_INFO_ERRORS", "ageValidation");

    if (Validation.isPositiveInteger(value)) {
      validation.setError("error", "Age must be a positive integer number");
      return;
    }

    if (value > 150) {
      validation.setError("warning", "Are you sure this is your age?");
      return;
    }

    validation.success();
  },

  heightValidation({LocalState}, value) {
    const validation = new Validation(LocalState, "EDIT_INFO_ERRORS", "heightValidation");

    if (Validation.isPositiveInteger(value)) {
      validation.setError("error", "Height must be a positive integer number");
      return;
    }

    if (value > 240) {
      validation.setError("warning", "Are you sure this is your height?");
      return;
    }

    validation.success();
  },

  clearErrors({LocalState}) {
    return LocalState.set('EDIT_INFO_ERRORS', null);
  }
}