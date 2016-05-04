import {Characters} from '/collections';
import _ from 'lodash';
export default ({LocalState}) => {

  LocalState.set('changesMessage', []);
  let count = 0;

  const characterCollection = Characters.find({ownerId: Meteor.userId()});
  let character = null;

  characterCollection.observeChanges({
    added(id, fields) {
      if(fields.ownerId == Meteor.userId())
        character = fields;
    },

    changed(id, fields) {
      let state = LocalState.get('changesMessage');

      _.forOwn(fields.stats, function(stat, key) {
        const value = stat - character.stats[key];

        if(value != 0) {
          state = _.concat(state, {key: count, name: key, value});
          LocalState.set('changesMessage', state);

          count++;

          setTimeout(function () {
            const state = LocalState.get('changesMessage');
            LocalState.set('changesMessage', _.drop(state));
          }, 5000);
        }
      });

      character = Characters.findOne(id);
    }
  });
}