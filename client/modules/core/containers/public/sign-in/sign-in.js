import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SignIn from '../../../components/public/sign-in/sign-in.jsx';

function composer({localState}, onData) {
  const messages = localState();

  onData(null, {
    messages
  });
}

function depsMapper(context, {Authorization}) {
  return ({
    localState: Authorization.localState,
    register: Authorization.register,
    login: Authorization.login,
    loginWithFacebook: Authorization.loginWithFacebook,
    loginWithGoogle: Authorization.loginWithGoogle,
    clearState: Authorization.clearState
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignIn);