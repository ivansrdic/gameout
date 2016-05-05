import {Characters} from '/collections';
import _ from 'lodash';

export default ({LocalState}) => {

  LocalState.set('changesMessage', []);

  const characterCollection = Characters.find({ownerId: Meteor.userId()});
  let character = null;

  const messagePipe = new ChangesMessagePipe(LocalState);

  characterCollection.observeChanges({
    added(id, fields) {
      if(fields.ownerId == Meteor.userId())
        character = fields;
    },

    changed(id, fields) {
      messagePipe.getState();

      if(fields.stats) {
        _.forOwn(fields.stats, function(stat, key) {
          const value = stat - character.stats[key];

          if(value != 0) {
            messagePipe.add({name: key, value});
          }
        });
      }

      if(fields.equipment) {
        const oldFields = _.keys(character.equipment);
        const newFields = _.keys(fields.equipment);

        console.log(_.difference(oldFields, newFields));
        console.log(_.difference(newFields, oldFields));

        /*if(oldFields.length < newFields.length) {
          messagePipe.add({name: "Equipped ", value: _.difference(oldFields, newFields)});
        } else if(oldFields.length > newFields.length) {
          messagePipe.add({name: "Unequipped ", value: _.difference(oldFields, newFields)});
        } else {
          messagePipe.add({name: "Replaced ", value: _.difference(oldFields, newFields)});
        }*/
      }



      character = Characters.findOne(id);
    }
  });
}

class ChangesMessagePipe {
  constructor(LocalState) {
    this.pipe = [];
    this.LocalState = LocalState;
    this.count = 0;
  }

  getState() {
    this.pipe = this.LocalState.get('changesMessage');
  }

  add(element) {
    element.key = this.count;

    this.pipe = _.concat(this.pipe, element);
    this.set();

    this.count++;

    this.timeoutRemove();
  }

  remove() {
    this.pipe = _.drop(this.LocalState.get('changesMessage'));
    this.set();
  }

  set() {
    this.LocalState.set('changesMessage', this.pipe);
  }

  timeoutRemove(time = 5000) {
    setTimeout(function() {
      this.remove();
    }.bind(this), time);
  }
}