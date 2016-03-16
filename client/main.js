import {createApp} from 'mantra-core';
import {DocHead} from 'meteor/kadira:dochead'
import initContext from './configs/context';
import accountsUISetup from './configs/accounts-ui-setup';

// modules
import coreModule from './modules/core';

// init context
const context = initContext();

// init Accounts UI
accountsUISetup();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();

DocHead.setTitle('Gameout');