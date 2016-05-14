import Validation, {Utils} from './validation-utility';

import {Workouts, PublicWorkouts} from '/collections';

const stateKey = "client.modules.core.actions.workout";

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
      validation.warning(Utils.ARE_YOU_SURE);
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

  createWorkout({LocalState}, workout, resetForm) {
    if(Utils.hasErrors(LocalState.get(stateKey)))
      return;
    Meteor.call('workout.addWorkout', workout, function (err) {
      const validation = new Validation(LocalState, stateKey, "globalMessage");
      if(err) {
        validation.error(err.reason);
      } else {
        resetForm();
        validation.success("Workout successfully added.");
      }
    });
  },

  warningCreateWorkout({LocalState}) {
    const validation = new Validation(LocalState, stateKey, "globalMessage");
    validation.error("Can not create workout without exercises.");
  },

  removeWorkout({}, workout) {
    Meteor.call('workout.removeWorkout', workout._id, function (err) {
      if (err) console.log(err);
    });
  },

  getExercises({Meteor}) {
    return Meteor.user().exercises();
  },

  getWorkoutExercises({}, workout) {
    return workout.exercises();
  },

  getWorkouts({Meteor}) {
    return Meteor.user().workouts();
  },

  publishWorkout({Meteor}, workout) {
    Meteor.call('workout.publishWorkout', workout._id, function (err) {
      if (err) console.log(err);
    });
  },

  unpublishWorkout({Meteor}, workout) {
    Meteor.call('workout.unpublishWorkout', workout._id, function (err) {
      if (err) console.log(err);
    });
  },

  subscribeToWorkout({Meteor}, workout) {
    Meteor.call('workout.subscribeToWorkout', workout._id, function (err) {
      if (err) console.log(err);
    });
  },

  unsubscribeFromWorkout({Meteor}, workout) {
    Meteor.call('workout.unsubscribeFromWorkout', workout._id, function (err) {
      if (err) console.log(err);
    });
  },

  getPublicWorkouts() {
    workoutsIds = PublicWorkouts.find().map((publicWorkout) => {return publicWorkout._id});
    return Workouts.find({_id: {$in: workoutsIds}});
  }
};