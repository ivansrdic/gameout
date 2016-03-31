import ProfileSetup from '../../../components/private/profile-setup/profile-setup.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const choice = LocalState.get("ProfileSetupChoice");
  
  onData(null, {choice});
  
  return () => {return LocalState.set("ProfileSetupChoice", null)};
};

export const depsMapper = (context, actions) => {
  return {
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ProfileSetup);