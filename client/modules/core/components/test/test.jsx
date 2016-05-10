import React, {Component} from 'react';
import {Workouts, Users} from '/collections';

class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  test1() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('workout.publishWorkout', workout._id);
  }

  test2() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('workout.unpublishWorkout', workout._id);
  }

  test3() {
    let workout = Workouts.findOne({name: "Full body routine"});
    console.log(workout);
    Meteor.call('workout.subscribeToWorkout', workout._id, (err) => { console.log(err); });
  }

  test4() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('workout.unsubscribeFromWorkout', workout._id);
  }

  test5() {
    let workout = Workouts.findOne({name: "Full body routine"});
    Meteor.call('workout.removeWorkout', workout._id);
  }

//userGroup tests
  testGroup1() {
    Meteor.call('group.createGroup', Meteor.userId());
    Meteor.call('group.createGroup', Meteor.userId());
  }

  testGroup2() {
    Meteor.call('group.addUserToGroup', "gameout");
  }  

  testGroup3() {
    Meteor.call('group.removeUserFromGroup', Users.findOne({username: "gameout"})._id);
  } 

  testGroup4() {
    Meteor.call('group.removeUserFromGroup', Meteor.userId());
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
        <li><input type="button" onClick={this.testGroup1} value="TestGroup1" /></li>
        <li><input type="button" onClick={this.testGroup2} value="TestGroup2" /></li>
        <li><input type="button" onClick={this.testGroup3} value="TestGroup3" /></li>
        <li><input type="button" onClick={this.testGroup4} value="TestGroup4" /></li>
      </ul>
    );
  }
}

export default Test;
