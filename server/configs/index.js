import accountsSetup from './accounts-setup';
import database from './database';

export default () => {
  accountsSetup();
  database();
};