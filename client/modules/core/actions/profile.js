export default {
  equipItem(type, set) {
    Characters.update(
      Meteor.user().profile.character,
      {$set : {["equipment."+type]: set}}
    );
  }
}