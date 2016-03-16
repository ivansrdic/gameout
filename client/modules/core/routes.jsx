import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/main_layout.jsx';
import Home from './components/home/home.jsx';
import EditInfo from './components/profile/edit-info.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'home',

    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  Accounts.onLogin(function(err) {
    if(err) console.log(err);
    console.log('test');
    if(Meteor.userId()) {
      FlowRouter.go('edit-info');
    }
  });

  FlowRouter.route('/edit-info', {
    name: 'edit-info',

    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditInfo />)
      });
    }
  });
}