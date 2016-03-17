export default {
  register(email, password) {
    Accounts.createUser({
      email: email,
      password: password
    }, function(err) {
      redirectOrSetError(err, '/profile');
    });
  },

  login(username, password) {
    Meteor.loginWithPassword(username, password, function(err) {
      redirectOrSetError(err, '/profile');
    });
  },

  logout() {
    Meteor.logout(function(err) {
      redirectOrSetError(err, '/')
    });
  },

  loginWithFacebook() {
    Meteor.loginWithFacebook({
        requestPermissions: [
          'public_profile'
          ]
      }, function(err) {
        redirectOrSetError(err, '/profile');
      }
    );
  },
  loginWithGoogle() {
    Meteor.loginWithGoogle(function(err) {
      redirectOrSetError(err, '/profile');
    });
  },
  loginWithTwitter() {
    Meteor.loginWithTwitter(function(err) {
      redirectOrSetError(err, '/profile');
    });
  }
}

function redirectOrSetError(err, location) {
  if(err) {
    Session.set('auth-error', err.reason || 'Unknown error');
  } else {
    FlowRouter.goOrRefresh(location);
  }
}