import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import ChangesMessage from '../../components/common/changes-message.jsx';

export function composer({LocalState}, onData) {
  const messages = LocalState.get('changesMessage') || [];

  onData(null, {messages});
}

function depsMapper({LocalState}, {}) {
  return ({
    LocalState: LocalState
  });
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ChangesMessage);