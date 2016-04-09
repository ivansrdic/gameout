import {SyncedCron} from 'meteor/percolate:synced-cron';

export default () => {
  SyncedCron.add({
    name: 'Crunch some important numbers for the marketing department',
    schedule: function(parser) {
      // parser is a later.parse object
      return parser.text('every 5 seconds');
    },
    job: function() {
      return "masni burek";
    }
  });
};