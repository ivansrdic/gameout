import {SyncedCron} from 'meteor/percolate:synced-cron';
import user from './user';

export default () => {
  user();

  SyncedCron.start();
};