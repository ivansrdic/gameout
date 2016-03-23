export default {
  completeSetup(userData) {
    // TODO: display error on character creation
    const characterId = Characters.insert(userData, function(err) {
      console.log(err);
    });
    Meteor.users.update(Meteor.userId(), {$set: {"profile.character": characterId}}, function(err) {
      FlowRouter.redirectOrSetError('/profile', err);
    });
  }
}