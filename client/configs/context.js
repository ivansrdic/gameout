import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {Tracker} from 'meteor/tracker';

export default function () {
  extend();

  return {
    Meteor,
    FlowRouter,
    Tracker
  };
}

function extend() {
  FlowRouter.goOrRefresh = function(location) {
    if(location === FlowRouter.current().route.pathDef) {
      FlowRouter.reload();
    } else {
      FlowRouter.go(location);
    }
  };
}
