import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/main_layout.jsx';
import Home from './components/home.jsx';

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
}