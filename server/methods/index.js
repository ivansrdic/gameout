import user from './user';
import character from './character';
import exercise from './exercise';
import workout from './workout';
import group from './group';
import quest from './quest';
import pvpGroup from './pvp-group';

export default function() {
  user();
  character();
  exercise();
  workout();
  group();
  quest();
  pvpGroup();
}
