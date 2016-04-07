export default () => {
  Accounts.onEmailVerificationLink(function(token, done) {
    Accounts.verifyEmail(token);

    FlowRouter.goOrRefresh('sign-in');
  });
}