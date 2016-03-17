import {composeWithTracker} from 'react-komposer';
import SignInComponent from '../../components/profile/sign-in.jsx';

function composer(props, onData) {
  const authError = Session.get('auth-error');
  let childProps = {};
  if(authError) childProps.authError = authError;
  onData(null, childProps);
}

const SignInContainer = composeWithTracker(composer)(SignInComponent);

class SignIn extends SignInContainer {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    Session.set('auth-error', null);
  }
}

export default SignIn;