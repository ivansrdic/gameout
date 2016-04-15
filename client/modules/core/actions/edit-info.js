import {Characters} from '/collections';
import Validation, {Utils} from './validation-utility';

const stateKey = "client.modules.core.actions.edit-info";

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

  weightValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "weightValidation");

    if (Utils.isPositiveInteger(value)) {
      validation.error(Utils.POSITIVE_NUMBER);
      return;
    }

    if (value > 150) {
      validation.warning("Are you sure this is your weight?");
      return;
    }

    validation.success();
  },

  usernameValidation({LocalState}, value) {
    const validation = new Validation(LocalState, stateKey, "usernameValidation");
    console.log(value, "DENI");

    if(Utils.isEmpty(value)) {
      validation.error(Utils.REQUIRED);
      return;
    }

    if(value.match(/\b\w+\b/g).length != 1) {
      validation.error("Username should be one word long.");
      return;
    }

    if(Utils.isNumeric(value[0])) {
      validation.error("Username must begin with a letter.");
      return;
    }


    validation.success();
  },

  submitUserInfo({LocalState}, userInfo, resetForm) {
    if (Utils.hasErrors(LocalState.get(stateKey))) return;

    Meteor.call('user.updateUserInfo', userInfo, (err) => {
      const validation = new Validation(LocalState, stateKey, "globalMessage");
      if (err) {
        validation.error(err.reason);
      } else {
        resetForm();
        validation.success("Saka čast direktore (neka poruka tu)");
      }
    });

  },

  localState({LocalState}) {
    return LocalState.get(stateKey) || {};
  },

  clearState({LocalState}) {
    return LocalState.set(stateKey, null);
  }
}