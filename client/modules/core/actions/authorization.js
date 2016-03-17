import Routing from '../libs/routing';

export default {
  register(email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      Routing.redirectOrSetError(err, '/profile');
    });
  },

  login(username, password) {
    Meteor.loginWithPassword(username, password, function(err) {
      Routing.redirectOrSetError(err, '/profile');
    });
  },

  logout() {
    Meteor.logout(function(err) {
      Routing.redirectOrSetError(err, '/')
    });
  },

  loginWithFacebook() {
    Meteor.loginWithFacebook({
        requestPermissions: [
          'public_profile'
          ]
      }, function(err) {
      Routing.redirectOrSetError(err, '/profile');
      }
    );
  },
  loginWithGoogle() {
    Meteor.loginWithGoogle(function(err) {
      Routing.redirectOrSetError(err, '/profile');
    });
  },
  loginWithTwitter() {
    Meteor.loginWithTwitter(function(err) {
      Routing.redirectOrSetError(err, '/profile');
    });
  }
}