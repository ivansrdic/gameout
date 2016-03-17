import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from './components/main_layout_public.jsx';
import PrivateLayout from './components/main_layout_private.jsx';
import Home from './components/home/home.jsx';
import SignIn from './components/profile/sign-in.jsx';
import Profile from './components/profile/profile.jsx';
import EditInfo from './components/profile/edit-info.jsx';
import CustomizeCharacter from './components/profile/customize-character.jsx';

export default function (injectDeps, {FlowRouter}) {
  const PublicLayoutCtx = injectDeps(PublicLayout);

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

    action() {
      if(!Meteor.user()) {
        FlowRouter.go('sign-in');
        return;
      }
      mount(PublicLayoutCtx, {
        content: () => (<Profile />)
      });
    }
  });

  FlowRouter.route('/edit-info', {
    name: 'edit-info',

    action() {
      if(!Meteor.user()) {
        FlowRouter.go('sign-in');
        return;
      }
      mount(PublicLayoutCtx, {
        content: () => (<EditInfo />)
      });
    }
  });

  FlowRouter.route('/customize-character', {
    name: 'customize-character',

    action() {
      if(!Meteor.user()) {
        FlowRouter.go('sign-in');
        return;
      }
      mount(PublicLayoutCtx, {
        content: () => (<CustomizeCharacter />)
      });
    }
  });
}