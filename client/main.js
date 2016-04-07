import {createApp} from 'mantra-core';
import {DocHead} from 'meteor/kadira:dochead'
import initContext from './configs/context';
import email from './configs/email';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

DocHead.setTitle('Gameout');
DocHead.addMeta({
  name: 'viewport',
  content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
});

email();