import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';
import {NProgress} from 'meteor/mrt:nprogress'

let LocalState = new ReactiveDict();

export default function () {
  extend();
  return {
    Meteor,
    FlowRouter,
    LocalState,
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
      LocalState.set('auth-error', err.reason || 'Unknown error');
    }
  }
}