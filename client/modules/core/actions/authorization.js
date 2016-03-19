export default {
  register(email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  login(username, password) {
    Meteor.loginWithPassword(username, password, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  logout() {
    Meteor.logout(function(err) {
      FlowRouter.redirectOrSetError('/', err)
    });
  },

  loginWithFacebook() {
    Meteor.loginWithFacebook(function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
      }
    );
  },
  loginWithGoogle() {
    Meteor.loginWithGoogle(function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },
  loginWithTwitter() {
    Meteor.loginWithTwitter(function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  }
}