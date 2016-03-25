import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import {Characters} from '/collections';
import Profile from '../../../components/private/profile/profile.jsx';

function composer(props, onData) {
  const subscription = Meteor.subscribe('character');

  if (subscription.ready()) {
    const data = {
      ready: true,
      character: Characters.findOne()
    };
    onData(null, data);
  } else {
    onData(null, {ready: false});
  }
}

export default composeWithTracker(composer)(Profile);