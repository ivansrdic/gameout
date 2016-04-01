import React, {Component} from 'react';
import {Grid, Row, Col, Button, ProgressBar} from 'react-bootstrap';
import {Transition} from 'react-overlays';
import Character from '../shared/character/character.jsx';
import Stats from '../shared/character/stats.jsx';
import Equipment from './equipment/equipment.jsx';
import Inventory from './inventory/inventory.jsx';
import WorkoutSelection from './workout/workout-selection.jsx';
import CurrentExercises from './exercise/current-exercises.jsx';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEquipment: false,
      showInventory: false,
      showWorkoutSelection: false,
      exercises: null
    };
  }

  componentDidUpdate() {
    if (this.props.ready) {
      NProgress.done();
    }
  }

  // TODO: break down into components
  render() {
    if (this.props.ready) {
      const {character} = this.props;
      return (
        <Grid className="profile" fluid={true}>
          <Row className="character-info no-gutter">
            <Col sm={3} lg={2}>
              <div className="character-container">
                <Character character={character} />
                <Button className="toggle equipment-toggle" bsStyle="default"
                        onClick={this.handleEquipmentButtonClick.bind(this)}><i className="fa fa-play"></i></Button>
              </div>
            </Col>
            <div id="character-details">
              <Transition
                in={this.state.showEquipment}
                timeout={500}
                className="col-xs-12 col-sm-3 col-lg-2"
                enteringClassName="equipment-entering animate-character-stats"
                enteredClassName="equipment-entered"
                exitingClassName="equipment-exiting animate-character-stats"
                exitedClassName="equipment-exited"
              >
                <div className="hide-of">
                  <Equipment character={character} unEquipItem={this.unEquipItem.bind(this)} />
                  <Button className="toggle inventory-toggle" bsStyle="default"
                          onClick={this.showInventory.bind(this)}>Show inventory</Button>
                </div>
              </Transition>
              <Col xs={12} sm={3} lg={2}>
                <div className="stats-container">
                  <h3><strong>{character.owner().username}</strong> Level {character.stats.level}</h3>
                  <Stats stats={character.stats} />
                  <div><b>Gold</b>: {character.stats.gold}</div>
                </div>
              </Col>
              <Transition
                in={this.state.showEquipment}
                timeout={500}
                className="col-xs-12"
                enteringClassName="col-sm-3 col-lg-6 animate-character-stats"
                enteredClassName="col-sm-3 col-lg-6"
                exitingClassName="col-sm-6 col-lg-8 animate-character-stats"
                exitedClassName="col-sm-6 col-lg-8"
              >
                <div>
                  <div className="stats-container">
                    <span><i className="fa fa-heart"></i> Health</span>
                    <ProgressBar bsStyle="danger" now={(character.stats.health/50)*100}/>
                    <span><i className="fa fa-star"></i> Experience</span>
                    <ProgressBar bsStyle="warning" now={(character.stats.experience/50)*100}/>
                  </div>
                </div>
              </Transition>
            </div>
          </Row>
          <Row>
            <Col md={6} mdOffset={3}>
              <div className="exercises-container">
                <CurrentExercises
                  chooseWorkout={this.chooseWorkout.bind(this)}
                  finishWorkout={this.finishWorkout.bind(this)}
                  exercises={this.state.exercises}/>
              </div>
            </Col>
          </Row>

          <Inventory
            show={this.state.showInventory}
            getInventory={this.props.getInventory}
            equipItem={this.equipItem.bind(this)}
            closeInventory={this.closeInventory.bind(this)}
            />

          <WorkoutSelection
            show={this.state.showWorkoutSelection}
            getWorkouts={this.props.getWorkouts}
            selectWorkout={this.selectWorkout.bind(this)}
            closeWorkoutSelection={this.closeWorkoutSelection.bind(this)}
          />

        </Grid>
      );
    } else
      return (
        <div></div>
      );
  }

  handleEquipmentButtonClick() {
    this.setState({
      showEquipment: !this.state.showEquipment
    });
  }

  unEquipItem(itemId) {
    this.props.unEquipItem(itemId);
  }

  showInventory() {
    this.setState({
      showInventory: true
    });
  }

  closeInventory() {
    this.setState({
      showInventory: false
    });
  }

  equipItem(itemId) {
    this.props.equipItem(itemId);
  }

  chooseWorkout() {
    this.setState({
      showWorkoutSelection: true
    });
  }

  closeWorkoutSelection() {
    this.setState({
      showWorkoutSelection: false
    });
  }

  selectWorkout(workout) {
    const exercises = this.props.getWorkoutExercises(workout);

    this.setState({
      showWorkoutSelection: false,
      exercises
    });
  }

  finishWorkout() {
    this.setState({
      exercises: null
    });
  }
}

export default Profile;