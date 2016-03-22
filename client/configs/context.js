import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {Tracker} from 'meteor/tracker';
import {NProgress} from 'meteor/mrt:nprogress'

export default function () {
  extend();
  return {
    Meteor,
    FlowRouter,
    Tracker,
    NProgress
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

  FlowRouter.redirectOrSetError = function(location, err) {
    if (!err) {
      FlowRouter.goOrRefresh(location);
    } else {
      FlowRouter.goOrRefresh('sign-in');
      Session.set('auth-error', err.reason || 'Unknown error');
    }
  }
}