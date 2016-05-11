const stateKey = "client.modules.core.actions.customize-character";

export default {
  stateKey() {
    return stateKey;
  },
  
  createCharacter({Meteor}, characterCreated) {
    if (Meteor.user().data.characterId) {
      characterCreated.set(true);
      return;
    }

    Meteor.call('character.createCharacter', function(err) {
      if (err) console.log(err);
      characterCreated.set(true);
    });
  },

  getHairs({Meteor}) {
    return Meteor.user().character().allHairs();
  },

  getTorsos({Meteor}) {
    return Meteor.user().character().allTorsos();
  },

  getLegs({Meteor}) {
     return Meteor.user().character().allLegs();
  },

  getColors({Meteor}) {
    return Meteor.user().character().allColors();
  },

  getAppearanceIds({Meteor}) {
    const appearance = Meteor.user().character().appearance;

    return [appearance.colorId, appearance.hairId, appearance.legsId, appearance.torsoId];
  },
  
  equipSkin({Meteor}, skinId) {
    Meteor.call('character.equipSkin', Meteor.user().data.characterId, skinId, function (err) {
      if (err) console.log(err);
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set(stateKey, null);
  }
}
