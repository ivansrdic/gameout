export default () => {
  Accounts.onCreateUser(function(options, user) {

    //Setup user profile
    if (user.services.facebook) {
      user.profile = {
        email: user.services.facebook.email,
        name: user.services.facebook.name,
        first_name: user.services.facebook.first_name,
        last_name: user.services.facebook.last_name
      };
    } else if(user.services.google) {
      user.profile = {
        email: user.services.google.email,
        name: user.services.google.name,
        first_name: user.services.google.given_name,
        last_name: user.services.google.family_name
      }
    }

    return user;
  });

  Accounts.validateLoginAttempt(function(data) {
    if(data.type === 'google' || data.type === 'facebook') return true;
    else if(data.methodName === 'createUser') return false;

    const loginEmail = data.methodArguments[0].user.email;
    for(let email of data.user.emails) {
      if(email.address == loginEmail) {
        if(email.verified) {
          return true;
        } else {
          Meteor.Error("Please verify your email")
        }
      }
    }
  });
}