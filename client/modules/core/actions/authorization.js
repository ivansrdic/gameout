export default {
  register({FlowRouter}, email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      err = {
        reason: "Registration successful, please verify your email"
      };
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  login({Meteor, FlowRouter}, usernameEmail, password) {
    Meteor.loginWithPassword(usernameEmail, password, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  logout({Meteor, FlowRouter}) {
    Meteor.logout(function(err) {
      FlowRouter.redirectOrSetError('/', err)
    });
  },

  loginWithFacebook({Meteor, FlowRouter}) {
    Meteor.loginWithFacebook(function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
      }
    );
  },
  loginWithGoogle({Meteor, FlowRouter}) {
    Meteor.loginWithGoogle(function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  clearErrors({LocalState}) {
    LocalState.set('auth-error', null);
  }
}