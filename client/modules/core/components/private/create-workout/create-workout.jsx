import React, {Component} from 'react';
import {Grid, Row, Col, Panel, Input, ButtonInput} from 'react-bootstrap';
import ExercisesList from '../shared/exercise/exercises-list.jsx';
import CreateExerciseModal from './create-exercise-modal.jsx';
import Message from '../../common/message.jsx';

class CreateWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showExerciseList: false,
      showCreateModal: false,
      selectedExerciseIds: [],
      selectedExercises: []
    }
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {messages, nameValidation, descriptionValidation} = this.props;

    return (
      <Grid>
        <Row>
          <Col md={12}>
            <Panel>
              <h1 className="text-center">Create workout</h1>
              <Message message={messages.globalMessage}/>
              <hr/>
              <form onSubmit={this.handleSetupFormSubmit.bind(this)}>
                <Col md={6}>
                  <Input
                    ref="name"
                    type="text-left"
                    label="Workout name"
                    placeholder="Workout name"
                    help={messages.nameValidation ? messages.nameValidation.message : ""}
                    bsStyle={messages.nameValidation ? messages.nameValidation.status : null}
                    onBlur={() => nameValidation(this.refs.name.getValue())}
                  />
                  <Input
                    ref="description"
                    type="textarea"
                    label="Description"
                    placeholder="Description"
                    help={messages.descriptionValidation ? messages.descriptionValidation.message : ""}
                    bsStyle={messages.descriptionValidation ? messages.descriptionValidation.status : null}
                    onBlur={() => descriptionValidation(this.refs.description.getValue())}
                  />
                  <ButtonInput onClick={ ()=> this.setState({ showExerciseList: !this.state.showExerciseList })}>
                    Show Exercise List
                  </ButtonInput>
                  <Panel collapsible expanded={this.state.showExerciseList}>
                    {this.showData()}
                  </Panel>
                </Col>
                <Col md={6}>
                  <Panel header="Selected exercises for your workout">
                      <ExercisesList exercises={this.showSelectedExercises()} onClickRemove={this.removeFromSelectedList.bind(this)}/>
                    <span className="pull-right">
                        <a className="btn btn-sm btn-success"
                           onClick={() => {this.setState({showCreateModal: true})}}>
                          Create new exercise
                        </a>
                    </span>
                  </Panel>
                  <ButtonInput className="pull-right" type="submit" value="Save"/>
                </Col>
              </form>
            </Panel>
          </Col>
        </Row>
        <CreateExerciseModal
          user={this.props.user}
          show={this.state.showCreateModal}
          onClickClose={this.closeCreateExerciseModal.bind(this)}
        />
      </Grid>
    );
  }

  showData() {
    return (
      <ExercisesList exercises={this.props.getExercises()} onClickAdd={this.addToSelectedList.bind(this)}/>
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

  closeCreateExerciseModal() {
    this.setState({showCreateModal: false});
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

    this.props.createWorkout(workout, this.resetForm.bind(this));
  }

  resetForm() {
    const labels = ['name', 'description'];
    this.setState({selectedExerciseIds:[]});
    this.setState({selectedExercises:[]});
    this.setState({showExerciseList:false});
    labels.forEach((label) => {this.refs[label].getInputDOMNode().value = '';});
  }
}

export default CreateWorkout;
