export default {
  register(email, username, password) {
    Accounts.createUser({
      email: email,
      username: username,
      password: password
    }, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  },

  login(email, password) {
    Meteor.loginWithPassword(email, password, function(err) {
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