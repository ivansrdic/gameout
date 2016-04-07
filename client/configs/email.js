import {setSuccess} from '../modules/core/actions/authorization';

export default ({LocalState}) => {
  Accounts.onEmailVerificationLink(function(token, done) {
    Accounts.verifyEmail(token);
  
    setSuccess(LocalState, "Registration successful, you can now login");

    FlowRouter.go('sign-in');
  });
}