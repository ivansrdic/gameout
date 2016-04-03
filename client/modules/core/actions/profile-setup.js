export default {
  isUserInfoDone({Meteor}) {
    return !!Meteor.user().userInfo();
  },
  
  clearErrors({LocalState}) {
    return LocalState.set("ProfileSetupChoice", null);
  }
}