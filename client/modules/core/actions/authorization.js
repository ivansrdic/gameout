export default {
  register({FlowRouter}, email, username, password) {
    Accounts.createUser({
      email: email,
      username: username,
      password: password
    }, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  login({Meteor, FlowRouter}, email, password) {
    Meteor.loginWithPassword(email, password, function(err) {
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