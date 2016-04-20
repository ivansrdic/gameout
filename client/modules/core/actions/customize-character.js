import Validation, {Utils} from './validation-utility';

const stateKey = "client.modules.core.actions.customize-character";

export default {
  stateKey() {
    return stateKey;
  },
  
  createCharacter({Meteor}) {
    if (Meteor.user().data.characterId) return;

    Meteor.call('character.createCharacter', function(err) {
      if (err) console.log(err);
    });
  },
  
  getSkins({Meteor}) {
    return Meteor.user().character().allSkins();
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
