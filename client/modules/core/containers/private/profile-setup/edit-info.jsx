import EditInfo from '../../../components/private/profile-setup/edit-info.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const errors = LocalState.get('EDIT_INFO_ERRORS');
  onData(null, {errors});

  return clearErrors;
};

export const depsMapper = (context, actions) => {
  console.log(actions);
  return {
    ageValidation: actions.ProfileSettings.ageValidation,
    clearErrors: actions.ProfileSettings.clearErrors,
    context: () => context
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditInfo);