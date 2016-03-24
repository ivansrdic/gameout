import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout.jsx';
import Home from './components/public/home.jsx';
import About from './components/public/about.jsx';
import HowItWorks from  './components/public/how-it-works.jsx';
import SignIn from './containers/public/sign-in/sign-in.jsx';
import Profile from './containers/private/profile/profile.jsx';
import ProfileSetup from './components/private/profile-setup.jsx';
import EditInfo from './components/private/edit-info.jsx';
import CustomizeCharacter from './components/private/customize-character.jsx';
import CreateWorkout from './components/private/create-workout/create-workout.jsx';
import CreateWorkoutGroup from './components/private/create-workout-group/create-workout-group.jsx';

export default function (injectDeps, {FlowRouter}) {
  // TODO: Define private layout for user auth
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    triggersEnter: [function (context, redirect) {
      if (Meteor.user()) {
        redirect('/profile');
      }
    }],

    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/how-it-works', {
    name: 'how-it-works',

    action() {
      mount(MainLayoutCtx, {
        content: () => (<HowItWorks />)
      });
    }
  });

  FlowRouter.route('/about', {
    name: 'about',

    action() {
      mount(MainLayoutCtx, {
        content: () => (<About />)
      });
    }
  });

  FlowRouter.route('/sign-in', {
    name: 'sign-in',

    action() {
      mount(MainLayoutCtx, {
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
        return;
      }

      // This part of code will be updated later on as profile setup divides into two components.
      if((!Meteor.user() || !Meteor.user().profile.character) && context.pathname != '/profile-setup') {
        redirect('/profile-setup');
        return;
      }
    }]
  });


  PrivateRoutes.route('/profile', {
    name: 'profile',
    action() {
      //if(!checkUserAuth()) return;
      mount(MainLayoutCtx, {
        content: (user) => (<Profile user={user} />)
      });
    }
  });

  PrivateRoutes.route('/profile-setup', {
    name: 'profile-setup',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<ProfileSetup user={user} />)
      });
    }
  });

  PrivateRoutes.route('/edit-info', {
    name: 'edit-info',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<EditInfo user={user} />)
      });
    }
  });

  PrivateRoutes.route('/customize-character', {
    name: 'customize-character',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<CustomizeCharacter user={user} />)
      });
    }
  });


  PrivateRoutes.route('/create-workout', {
    name: 'create-workout',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<CreateWorkout user={user} />)
      });
    }
  });

  PrivateRoutes.route('/create-workout-group', {
    name: 'create-workout-group',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<CreateWorkoutGroup user={user} />)
      });
    }
  });
}