import React, {Component} from 'react';
import {Items, Workouts, Users, Quests} from '/collections';

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
  
  testFinishWorkout() {
    Meteor.call('user.finishWorkout');
  }

  beginQuest() {
    let user = Users.findOne(Meteor.userId());
    let quest = Quests.findOne();
    console.log(user.group());
    
    Meteor.call('quest.beginQuest', quest._id, user.group()._id);
  }

  testPvpGroupStart() {
    Meteor.call('pvp-group.startPvP', "gameout");
    Meteor.call('pvp-group.startPvP', "gameout");
  }

  testPvpGroupSurrender() {
    Meteor.call('pvp-group.surrender');
  }  

  testBuyItem() {
    Meteor.call('character.buyItem', Items.findOne({name: "Shield of Bravery"})._id);
  }
 
  render() {
    Meteor.subscribe('user');
    Meteor.subscribe('items');
    Meteor.subscribe('character');
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
        <li><input type="button" onClick={this.testFinishWorkout} value="TestFinishWorkout" /></li>
        <li><input type="button" onClick={this.beginQuest} value="beginQuest" /></li>
        <li><input type="button" onClick={this.testPvpGroupStart} value="PvPStart" /></li>
        <li><input type="button" onClick={this.testPvpGroupSurrender} value="PvPSurrender" /></li>
        <li><input type="button" onClick={this.testBuyItem} value="BuyItem" /></li>
      </ul>
    );
  }
}

export default Test;
