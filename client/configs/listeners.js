import {Characters, Items} from '/collections';
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
        _.forOwn(fields.stats, function(statValue, key) {
          if(key == "experience" && fields.stats.level != character.stats.level) {
            // TODO: make this look normal
          } else {
            const value = statValue - character.stats[key];

            if(value > 0) messagePipe.addSuccess({name: key, value});
            else if(value < 0) messagePipe.addDanger({name: key, value});
          }
        });
      }

      if(fields.equipment) {
        const oldFields = _.values(character.equipment);
        const newFields = _.values(fields.equipment);

        const oldDiff = _.difference(oldFields, newFields);
        const newDiff = _.difference(newFields, oldFields);

        if(oldDiff.length && newDiff.length) {
          messagePipe.addInfo({name: "Replaced ", value: Items.findOne(newDiff[0]).name});
        } else if(oldDiff.length) {
          messagePipe.addDanger({name: "Unequipped ", value: Items.findOne(oldDiff[0]).name});
        } else if(newDiff.length) {
          messagePipe.addSuccess({name: "Equipped ", value: Items.findOne(newDiff[0]).name});
        }
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

  addSuccess(element) {
    element.style = "success";
    this.add(element);
  }

  addDanger(element) {
    element.style = "danger";
    this.add(element);
  }

  addInfo(element) {
    element.style = "info";
    this.add(element);
  }

  addWarning(element) {
    element.style = "warning";
    this.add(element);
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