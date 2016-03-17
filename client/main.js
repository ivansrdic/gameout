import {createApp} from 'mantra-core';
import {DocHead} from 'meteor/kadira:dochead'
import initContext from './configs/context';
import initSubs from './configs/subscriptions';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

DocHead.setTitle('Gameout');

initSubs();