export default {
  register(email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
    });
  },

  login(username, password) {
    Meteor.loginWithPassword(username, password, function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
    });
  },

  logout() {
    Meteor.logout(function(err) {
      FlowRouter.redirectOrSetError(err, '/')
    });
  },

  loginWithFacebook() {
    Meteor.loginWithFacebook(function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
      }
    );
  },
  loginWithGoogle() {
    Meteor.loginWithGoogle(function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
    });
  },
  loginWithTwitter() {
    Meteor.loginWithTwitter(function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
    });
  }
}