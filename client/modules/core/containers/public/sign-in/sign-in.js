import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SignIn from '../../../components/public/sign-in/sign-in.jsx';

function composer({Authorization, LocalState}, onData) {
  const messages = LocalState.get(Authorization.stateKey()) || {};

  onData(null, {
    messages
  });

  return Authorization.clearErrors;
}

function depsMapper(context, actions) {
  return ({
    LocalState: context.LocalState,
    Authorization: actions.Authorization
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignIn);