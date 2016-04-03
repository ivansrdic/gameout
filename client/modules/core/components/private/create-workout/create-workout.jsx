import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';
import ExercisesList from '../shared/exercise/exercises-list.jsx';


class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selectedExerciseIds: [],
      selectedExercises: []
    }
  }

  componentDidUpdate() {
    if (this.props.ready) {
      NProgress.done();
    }
  }

  render() {
    const {ready} = this.props;
    const {errors} = this.props;
    const {nameValidation, descriptionValidation} = this.props;

    if(ready) {
      return (
        <Grid>
          <Row>
            <Col md={12}>
              <Panel>
                <h1 className="text-center">Create workout</h1>
                <hr/>
                <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                  <Col md={6}>
                    <Input
                      ref="name"
                      type="text-left"
                      label="Workout name"
                      placeholder="Workout name"
                      help={errors.nameValidation ? errors.nameValidation.message : ""}
                      bsStyle={errors.nameValidation ? errors.nameValidation.status : null}
                      onBlur={() => nameValidation(this.refs.name.getValue())}
                    />
                    <Input
                      ref="description"
                      type="textarea"
                      label="Description"
                      placeholder="Description"
                      help={errors.descriptionValidation ? errors.descriptionValidation.message : ""}
                      bsStyle={errors.descriptionValidation ? errors.descriptionValidation.status : null}
                      onBlur={() => descriptionValidation(this.refs.description.getValue())}
                    />
                    <ButtonInput onClick={ ()=> this.setState({ open: !this.state.open })}>
                      Exercise List
                    </ButtonInput>
                    <Panel collapsible expanded={this.state.open}>
                      {this.showData()}
                    </Panel>
                  </Col>
                  <Col md={6}>
                    <Panel header="Selected exercises for your workout">
                        <ExercisesList exercises={this.showSelectedExercises()} onClickRemoveExercise={this.removeFromSelectedList.bind(this)}/>
                      <span className="pull-right">
                          <a className="btn btn-sm btn-success">Create new workout</a>
                      </span>
                    </Panel>
                    <ButtonInput className="pull-right" type="submit" value="Save"/>
                  </Col>
                </form>
              </Panel>
            </Col>
          </Row>
        </Grid>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  showData() {
    return (
      <ExercisesList exercises={this.props.getExercises()} onSelectedAddToSelectedWorkout={this.addToSelectedList.bind(this)}/>
    );
  }

  showSelectedExercises() {
    const exercises = [];
    for (var i = 0; i < this.state.selectedExercises.length; i++) {
      exercises.push(this.state.selectedExercises[i]);
    }
    return exercises;
  }

  removeFromSelectedList(exercise) {
    var newSelectedIds = this.state.selectedExerciseIds.slice();
    var newSelectedExercise = this.state.selectedExercises.slice();
    var indexId = newSelectedIds.indexOf(exercise._id);
    var IndexExercise = newSelectedExercise.indexOf(exercise);
    if(indexId != -1) {
        newSelectedIds.splice(indexId, 1);
        newSelectedExercise.splice(IndexExercise, 1);
      this.setState({selectedExerciseIds:newSelectedIds});
      this.setState({selectedExercises:newSelectedExercise});
    }
  }


  addToSelectedList(exercise) {
    var newSelectedIds = this.state.selectedExerciseIds.slice();
    var newSelectedExercise = this.state.selectedExercises.slice();
    if(newSelectedIds.indexOf(exercise._id) === -1) {
      newSelectedIds.push(exercise._id);
      newSelectedExercise.push(exercise);
      this.setState({selectedExerciseIds:newSelectedIds});
      this.setState({selectedExercises:newSelectedExercise});
    }
  }

  handleSetupFormSubmit(e) {
    e.preventDefault();

    const {name, description} = this.refs;

    const workout = {
      ownerId: this.props.user._id,
      name: name.getValue(),
      description: description.getValue(),
      exerciseIds: this.state.selectedExerciseIds
    };

    const {nameValidation, descriptionValidation} = this.props;

    nameValidation(workout.name);
    descriptionValidation(workout.description);

    this.props.createWorkout(workout);
  }
}

export default CreateWorkout;