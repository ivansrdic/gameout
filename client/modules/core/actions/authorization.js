import Validation from './validation-utility';

export const stateKey = "client.modules.core.actions.authorization";

export default {
  stateKey() {
    return stateKey;
  },

  register({LocalState}, email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      const validation = new Validation(LocalState, stateKey, "globalMessage");
      if(err.error === 'verify-email') {
        validation.success("Registration successful. An email verification link has been sent.");
      } else {
        const errorMessage = err.reason;
        validation.error(errorMessage);
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

export function setErrorOrRedirect(FlowRouter, LocalState, location, err) {
  if(err) {
    const validation = new Validation(LocalState, stateKey, "globalMessage");
    const errorMessage = err.reason;
    validation.error(errorMessage);
  }
  else {
    FlowRouter.go(location);
  }
}