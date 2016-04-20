import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout.js';
import PublicLayout from './components/public_layout.jsx';
import Home from './components/public/home/home.jsx';
import HowItWorks from  './components/public/how-it-works/how-it-works.jsx';
import SignIn from './containers/public/sign-in/sign-in.js';
import Profile from './containers/private/profile/profile.js';
import Party from './containers/private/party/party.js';
import ProfileSetup from './containers/private/profile-setup/profile-setup.jsx';
import EditInfo from './containers/private/profile-setup/edit-info.jsx';
import CustomizeCharacter from './containers/private/profile-setup/customize-character.jsx';
import Exercises from './containers/private/exercise/exercises.js';
import Workouts from './containers/private/workout/workouts.js';
import Test from './components/test/test.jsx';

export default function (injectDeps, {FlowRouter, LocalState}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const PublicLayoutCtx = injectDeps(PublicLayout);

  FlowRouter.route('/', {
    name: 'home',
    triggersEnter: [function (context, redirect) {
      if (Meteor.user()) {
        redirect('/profile');
      }
    }],

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
        LocalState.set('auth-error', 'You need to log in first.');
        redirect('/sign-in');
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

  PrivateRoutes.route('/party', {
    name: 'party',
    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<Party user={user} />)
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


  PrivateRoutes.route('/exercises', {
    name: 'create-exercise',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<Exercises user={user} />)
      });
    }
  });

  PrivateRoutes.route('/workouts', {
    name: 'create-workout',

    action() {
      mount(MainLayoutCtx, {
        content: (user) => (<Workouts user={user} />)
      });
    }
  });

  PrivateRoutes.route('/test', {
    name: 'test',

    action() {
      mount(PublicLayoutCtx, {
        content: () => (<Test />)
      });
    }
  });

}
