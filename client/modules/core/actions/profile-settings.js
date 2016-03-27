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
    let validation = new Validation(LocalState, "EDIT_INFO_ERRORS", "ageValidation");

    if (!validation.isNumeric(value) || !Number.isInteger(parseFloat(value)) || !(value > 0)) {
      validation.setError("error", "Age must be a positive number");
      return;
    }

    if (value > 150) {
      validation.setError("warning", "Are you sure this is your age?");
      return;
    }

    validation.setError("success", "");
  },

  clearErrors({LocalState}) {
    return LocalState.set('EDIT_INFO_ERRORS', null);
  }
}