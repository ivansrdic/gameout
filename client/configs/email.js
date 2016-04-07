import Validation from '../modules/core/actions/validation-utility';
import {stateKey} from '../modules/core/actions/authorization';

export default ({LocalState}) => {
  Accounts.onEmailVerificationLink(function (token, done) {
    Accounts.verifyEmail(token);

    const validation = new Validation(LocalState, stateKey, "globalMessage");
    validation.success("Registration successful, you can now login");

    FlowRouter.go('sign-in');
  });
}