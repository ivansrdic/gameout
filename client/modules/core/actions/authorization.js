const stateKey = "client.modules.core.actions.authorization";

export default {
  stateKey() {
    return stateKey;
  },

  register({LocalState}, email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      if(err.error === 'verify-email') {
        setSuccess(LocalState, "Registration successful. An email verification link has been sent.");
      } else {
        setError(LocalState, err);
      }
    });
  },

  login({Meteor, FlowRouter, LocalState}, usernameEmail, password) {
    Meteor.loginWithPassword(usernameEmail, password, function(err) {
      setErrorOrRedirect(FlowRouter, LocalState, 'profile', err);
    });
  },

  logout({Meteor, FlowRouter, LocalState}) {
    Meteor.logout(function(err) {
      setErrorOrRedirect(FlowRouter, LocalState, '/', err);
    });
  },

  loginWithFacebook({Meteor, FlowRouter, LocalState}) {
    Meteor.loginWithFacebook(function(err) {
      setErrorOrRedirect(FlowRouter, LocalState, 'profile', err);
      }
    );
  },
  loginWithGoogle({Meteor, FlowRouter, LocalState}) {
    Meteor.loginWithGoogle(function(err) {
      setErrorOrRedirect(FlowRouter, LocalState, 'profile', err);
    });
  },

  clearErrors({LocalState}) {
    LocalState.set(stateKey, null);
  }
}

export function setError(LocalState, err) {
  const error = err.reason || err;
  LocalState.set(stateKey, {
    error
  })
}

export function setErrorOrRedirect(FlowRouter, LocalState, location, err) {
  if(err) {
    setError(LocalState, err);
  }
  else {
    FlowRouter.go(location);
  }
}

export function setSuccess(LocalState, success) {
  LocalState.set(stateKey, {
    success
  });
}