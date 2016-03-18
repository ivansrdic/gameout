import Routing from '../libs/routing';

export default {
  completeSetup(userData) {
    Characters.insert(userData, function(err) {
      console.log(err);
    });
    Meteor.users.update(Meteor.userId(), {$set: {completedSetup: true}}, function(err) {
      Routing.redirectOrSetError(err, '/profile');
    });
  }
}