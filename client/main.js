import {createApp} from 'mantra-core';
import {DocHead} from 'meteor/kadira:dochead'
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import navigation from './modules/navigation';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(navigation);
app.init();

DocHead.setTitle('Gameout');