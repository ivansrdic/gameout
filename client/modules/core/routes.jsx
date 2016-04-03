import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout.js';
import Home from './components/public/home/home.jsx';
import About from './components/public/about/about.jsx';
import HowItWorks from  './components/public/how-it-works/how-it-works.jsx';
import SignIn from './containers/public/sign-in/sign-in.js';
import Profile from './containers/private/profile/profile.js';
import ProfileSetup from './containers/private/profile-setup/profile-setup.jsx';
import EditInfo from './containers/private/profile-setup/edit-info.jsx';
import CustomizeCharacter from './components/private/profile-setup/customize-character.jsx';
import CreateExercisePanel from './containers/private/create-exercise/create-exercise-panel.js';
import CreateWorkout from './containers/private/create-workout/create-workout.js';

export default function (injectDeps, {FlowRouter, LocalState}) {
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
        LocalState.set('auth-error', 'You need to log in first.');
        redirect('/sign-in');
        return;
      }

      // This part of code will be updated later on as profile setup divides into two components.
      if((Meteor.user().data && !Meteor.user().data.characterId) && context.pathname != '/profile-setup') {
        redirect('/profile-setup');
      }
    }]
  });


  PrivateRoutes.route('/profile', {
    name: 'profile',
    action() {
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


  PrivateRoutes.route('/create-exercise', {
    name: 'create-exercise',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<CreateExercisePanel user={user} />)
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
}