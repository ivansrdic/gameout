export default {
  completeSetup(userData) {
    // TODO: display error on character creation
    Characters.insert(userData, function(err) {
      console.log(err);
    });
    Meteor.users.update(Meteor.userId(), {$set: {completedSetup: true}}, function(err) {
      FlowRouter.redirectOrSetError(err, '/profile');
    });
  }
}