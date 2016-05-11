import character from './character';
import user from './user';
import exercises from './exercises';
import workouts from './workouts';
import publicWorkouts from './public-workouts';
import items from './items';
import skins from './skins';
import levels from './levels';
import quests from './quest';

export default function() {
  character();
  user();
  exercises();
  workouts();
  items();
  skins();
  levels();
  publicWorkouts();
  quests();
}
