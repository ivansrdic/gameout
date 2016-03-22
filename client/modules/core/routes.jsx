import React from 'react';
import {mount} from 'react-mounter';

import PublicLayout from './containers/public_layout.jsx';
import Home from './components/home/home.jsx';
import About from './components/home/about.jsx';
import HowItWorks from  './components/home/how-it-works.jsx';
import SignIn from './containers/profile/sign-in.jsx';
import Profile from './containers/profile/profile.jsx';
import ProfileSetup from './components/profile/profile-setup.jsx';
import EditInfo from './components/profile/edit-info.jsx';
import CustomizeCharacter from './components/profile/customize-character.jsx';
import CreateWorkout from './components/profile/create-workout.jsx';
import CreateWorkoutGroup from './components/profile/create-workout-group.jsx';

export default function (injectDeps, {FlowRouter}) {
  // TODO: Define private layout for user auth
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
        content: () => (<HowItWorks />)
      });
    }
  });

  FlowRouter.route('/about', {
    name: 'about',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<About />)
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

  /*
     PRIVATE
   */

  const PrivateRoutes = FlowRouter.group({
    triggersEnter: [function(context, redirect) {
      if(!Meteor.user()) {
        Session.set('auth-error', 'You need to log in first.');
        redirect('/sign-in');
      }
    }]
  });


  PrivateRoutes.route('/profile', {
    name: 'profile',
    action() {
      //if(!checkUserAuth()) return;
      mount(PublicLayoutCtx, {
        content: (user) => (<Profile user={user} />)
      });
    }
  });

  PrivateRoutes.route('/profile-setup', {
    name: 'profile-setup',

    action() {
      mount(PublicLayoutCtx, {
        content: (user) => (<ProfileSetup user={user} />)
      });
    }
  });

  PrivateRoutes.route('/edit-info', {
    name: 'edit-info',

    action() {
      mount(PublicLayoutCtx, {
        content: (user) => (<EditInfo user={user} />)
      });
    }
  });

  PrivateRoutes.route('/customize-character', {
    name: 'customize-character',

    action() {
      mount(PublicLayoutCtx, {
        content: (user) => (<CustomizeCharacter user={user} />)
      });
    }
  });


  PrivateRoutes.route('/create-workout', {
    name: 'create-workout',

    action() {
      mount(PublicLayoutCtx, {
        content: (user) => (<CreateWorkout user={user} />)
      });
    }
  });

  PrivateRoutes.route('/create-workout-group', {
    name: 'create-workout-group',

    action() {
      mount(PublicLayoutCtx, {
        content: (user) => (<CreateWorkoutGroup user={user} />)
      });
    }
  });
}