import React, {Component} from 'react';
import {Workouts} from '/collections';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  test1() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('publishWorkout', workout._id);
  }

  test2() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('unpublishWorkout', workout._id);
  }

  test3() {
    let workout = Workouts.findOne({name: "Full body routine"});
    console.log(workout);
    Meteor.call('subscribeToWorkout', workout._id, (err) => { console.log(err); });
  }

  test4() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('unsubscribeFromWorkout', workout._id);
  }

  test5() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('removeWorkout', workout._id);
  }

  render() {
    Meteor.subscribe('user');
    Meteor.subscribe('public-workouts');
    return (
      <ul>
        <li><input type="button" onClick={this.test1} value="Test1" /></li>
        <li><input type="button" onClick={this.test2} value="Test2" /></li>
        <li><input type="button" onClick={this.test3} value="Test3" /></li>
        <li><input type="button" onClick={this.test4} value="Test4" /></li>
        <li><input type="button" onClick={this.test5} value="Test5" /></li>
      </ul>
    );
  }
}

export default Test;
