import {Characters, Items, Groups, PvPGroups} from '/collections';
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

      if(fields.inventoryIds) {
        const oldFields = _.values(character.inventoryIds);
        const newFields = _.values(fields.inventoryIds);

        const newDiff = _.difference(newFields, oldFields);

        messagePipe.addSuccess({name: "Bought ", value: Items.findOne(newDiff[0]).name});
      }


      character = Characters.findOne(id);
    }
  });


  const groupsCollection = Groups.find();
  let group;

  groupsCollection.observeChanges({
    added(id, fields) {
      group = fields;
    },

    changed(id, fields) {
      messagePipe.getState();

      if(fields.currentBossHealth) {
        const value = group.currentBossHealth - fields.currentBossHealth;

        if(value != 0) {
          messagePipe.addSuccess({name: "Damage to boss", value})
        }
      }

      group = Groups.findOne(id);
    }
  });




  const pvpGroupsCollection = PvPGroups.find();
  let pvpGroup;

  pvpGroupsCollection.observeChanges({
    added(id, fields) {
      pvpGroup = fields;
    },

    changed(id, fields) {
      messagePipe.getState();

      if(fields.firstPlayerHealth) {
        const value = pvpGroup.firstPlayerHealth - fields.firstPlayerHealth;

        if (value != 0) {
          messagePipe.addInfo({name: "firstPlayerDamage", value})
        }
      }

      if(fields.secondPlayerHealth) {
        const value = pvpGroup.secondPlayerHealth - fields.secondPlayerHealth;

        if (value != 0) {
          messagePipe.addInfo({name: "secondPlayerDamage", value})
        }
      }

      pvpGroup = PvPGroups.findOne(id);
    }
  });
}

class ChangesMessagePipe {
  constructor(LocalState) {
    this.pipe = [];
    this.LocalState = LocalState;
    this.count = 0;
    this.tmpcnt = 0;
  }

  getState() {
    this.pipe = this.LocalState.get('changesMessage');
  }

  add(element) {
    element.key = this.count;
    element.animation = "fadeIn";

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

  hide() {
    this.pipe[this.tmpcnt].animation = "fadeOut";
    this.set();
    this.tmpcnt++;
  }

  remove() {
    this.pipe = _.drop(this.LocalState.get('changesMessage'));
    this.set();
    this.tmpcnt--;
  }

  set() {
    this.LocalState.set('changesMessage', this.pipe);
  }

  timeoutHide(time = 4500) {
    setTimeout(function() {
      this.hide();
    }.bind(this), time);
  }

  timeoutRemove(time = 5000) {
    this.timeoutHide();
    setTimeout(function() {
      this.remove();
    }.bind(this), time);
  }
}