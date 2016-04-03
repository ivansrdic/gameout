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

  submitUserInfo({LocalState}, userInfo) {
    //TODO: Return client validation!!!
    // if (Utils.hasErrors(LocalState.get(stateKey))) return;

    Meteor.call('user.updateUserInfo', userInfo, (err) => {
      if (err) {
        LocalState.set(stateKey, Utils.serverError());
      } else {
        LocalState.set(stateKey, null);
      }
    });

  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  }
}