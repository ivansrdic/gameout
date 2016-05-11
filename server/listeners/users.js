import {Groups, Users, Characters, Levels, Items, Skins} from '/collections';

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
    let group = {
      ownerId: user._id,
      memberIds: [user._id]
    };
    let groupId = Groups.insert(group);
    user.data = { groupId: groupId };

    return user;
  });

  Accounts.validateLoginAttempt(function(data) {
    if(data.error) return false;

    if(data.type === 'google' || data.type === 'facebook') return true;
    else if(data.methodName === 'createUser') throw new Meteor.Error("verify-email", "Please verify your email");

    //TODO: remove
    if(data.user.emails[0].address === 'gameout@gameout.com') return true;

    const email = data.user.emails[0];
    if(email.verified) {
      return true;
    } else {
      throw new Meteor.Error("verify-email", "Please verify your email");
    }
  });
}
