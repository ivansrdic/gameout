import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {Tracker} from 'meteor/tracker';

export default function () {
  extend();
  subscribe();
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

  FlowRouter.redirectOrSetError = function(err, location) {
    if (err) {
      Session.set('auth-error', err.reason || 'Unknown error');
    } else {
      FlowRouter.goOrRefresh(location);
    }
  }
}

function subscribe() {
  Tracker.autorun(function() {
    Meteor.subscribe('users');
    Meteor.subscribe('character');
  });
}