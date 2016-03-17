import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home/home.jsx';
import SignIn from './containers/profile/sign-in.js';
import Profile from './components/profile/profile.jsx';
import EditInfo from './components/profile/edit-info.jsx';
import CustomizeCharacter from './components/profile/customize-character.jsx';

export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/how-it-works', {
    name: 'how-it-works',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/about', {
    name: 'about',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/sign-in', {
    name: 'sign-in',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<SignIn />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'profile',

    action(params) {
      if(!checkUserAuth()) return;

      mount(PublicLayoutCtx, {
        content: () => (<Profile />)
      });
    }
  });

  FlowRouter.route('/edit-info', {
    name: 'edit-info',

    action() {
      if(!checkUserAuth()) return;
      mount(PublicLayoutCtx, {
        content: () => (<EditInfo />)
      });
    }
  });

  FlowRouter.route('/customize-character', {
    name: 'customize-character',

    action() {
      if(!checkUserAuth()) return;
      mount(PublicLayoutCtx, {
        content: () => (<CustomizeCharacter />)
      });
    }
  });
}

function checkUserAuth() {
  if(!Meteor.user()) {
    FlowRouter.go('sign-in');
    Session.set('auth-error', 'You need to log in first.');
    return false;
  }
  return true;
}