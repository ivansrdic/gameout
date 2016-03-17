export default {
  register(username, email, password) {
    Accounts.createUser({
      username: username,
      email: email,
      password: password
    }, function(err) {
      if(err) {
        Session.set('auth-error', err.message);
      } else {
        FlowRouter.go('/edit-info');
      }
    });
  },

  login(username, password) {
    Meteor.loginWithPassword(username, password, function(err) {
      if(err) {
        Session.set('auth-error', err.message);
      } else {
        FlowRouter.go('/profile');
      }
    });
  },

  logout() {
    Meteor.logout(function() {
      FlowRouter.go('/');
    });
  }
}