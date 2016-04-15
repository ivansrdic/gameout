export default {
  isUserInfoDone({Meteor}) {
    return !!Meteor.user().userInfo();
  },
  
  clearState({LocalState}) {
    return LocalState.set("ProfileSetupChoice", null);
  }
}