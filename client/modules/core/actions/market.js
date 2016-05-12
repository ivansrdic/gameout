import {Items} from '/collections';

export default {
  getItems() {
    return Items.find();
  },

  buyItem({Meteor}, itemId) {
    Meteor.call('character.buyItem', itemId, function(err) {
      if(err) console.log(err);
    });
  }
}
