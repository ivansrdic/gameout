import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import SignIn from '../../../components/public/sign-in/sign-in.jsx';

function composer({Authorization, LocalState}, onData) {
  const error = LocalState.get('auth-error');
  onData(null, {error});

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