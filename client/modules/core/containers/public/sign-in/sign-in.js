import {composeWithTracker} from 'mantra-core';
import React, {Component} from 'react';
import SignIn from '../../../components/public/sign-in/sign-in.jsx';


function composer(props, onData) {
  const authError = Session.get('auth-error');
  onData(null, {authError});
}

export default composeWithTracker(composer)(SignIn);