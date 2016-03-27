import {Characters} from '/collections';

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
    // console.log("AGE VALIDATION");
    let errors = LocalState.get("EDIT_INFO_ERRORS");
    errors = errors ? errors : {};

    let isNumeric = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    let setError = function(status, message) {
      errors.ageValidation = {status, message};
      LocalState.set("EDIT_INFO_ERRORS", errors);
    };

    if (!isNumeric(value) || !Number.isInteger(parseFloat(value)) || !(value > 0)) {
      setError("error", "Age must be a positive number");
      return;
    }

    if (value > 150) {
      setError("warning", "Are you sure this is your age?");
      return;
    }

    setError("success", "");
  },

  clearErrors({LocalState}) {
    return LocalState.set('EDIT_INFO_ERRORS', null);
  }
}