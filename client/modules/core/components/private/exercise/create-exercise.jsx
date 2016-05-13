import React from 'react';
import Component from '/client/modules/core/components/common/component.jsx';
import {Panel, Input, ButtonGroup, ButtonInput} from 'react-bootstrap';
import Message from '../../common/message.jsx';

class Workout extends Component {
  constructor(props) {
    super(props);

    this.gender = "male";
    this.level = "easy";
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {messages, nameValidation, descriptionValidation, linkValidation, unitValidation} = this.props;
    return (
      <div>
        <hr/>
        <form className="create-exercise" onSubmit={this.handleSetupFormSubmit.bind(this)}>
          <h1 className="text-center">Create exercise</h1>

          <Message message={messages.globalMessage}/>

          <Input
            id="name"
            ref="name"
            type="text"
            label="Exercise name"
            placeholder="Exercise name"
            help={messages.nameValidation ? messages.nameValidation.message : ""}
            bsStyle={messages.nameValidation ? messages.nameValidation.status : null}
            onBlur={() => nameValidation(this.refs.name.getValue())}/>

          <label htmlFor="gender" className="control-label input-group">Gender</label>
          <ButtonGroup ref="gender" className="form-group" data-toggle="buttons">
            <label onClick={e => this.handleGenderPick(e, "male")} className="btn btn-default active">
              <input name="gender" value="male" type="radio"/>Male </label>
            <label onClick={e => this.handleGenderPick(e, "female")} className="btn btn-default">
              <input name="gender" value="female" type="radio"/>Female</label>
            <label onClick={e => this.handleGenderPick(e, "unisex")} className="btn btn-default">
              <input name="gender" value="unisex" type="radio"/>Unisex</label>
          </ButtonGroup>

          <Input
            ref="description"
            type="textarea"
            label="Description"
            placeholder="Description"
            help={messages.descriptionValidation ? messages.descriptionValidation.message : ""}
            bsStyle={messages.descriptionValidation ? messages.descriptionValidation.status : null}
            onBlur={() => descriptionValidation(this.refs.description.getValue())}
          />

          <Input
            ref="link"
            type="text"
            label="Video/image link"
            placeholder="Video/image link"
            help={messages.linkValidation ? messages.linkValidation.message : ""}
            bsStyle={messages.linkValidation ? messages.linkValidation.status : null}
            onBlur={() => linkValidation(this.refs.link.getValue())}
          />

          <Input
            ref="unit"
            type="text"
            label="Unit"
            placeholder="Unit"
            help={messages.unitValidation ? messages.unitValidation.message : ""}
            bsStyle={messages.unitValidation ? messages.unitValidation.status : null}
            onBlur={() => unitValidation(this.refs.unit.getValue())}
          />

          <label htmlFor="level" className="control-label input-group">Level</label>
          <ButtonGroup refs="level" className="form-group"  data-toggle="buttons">
            <label onClick={e => this.handleLevelPick(e, "easy")} className="btn btn-default active">
              <input name="level" value="easy" color="red" type="radio"/>Easy
            </label>
            <label onClick={e => this.handleLevelPick(e, "medium")} className="btn btn-default">
              <input class="medium" name="level" value="medium" type="radio"/>Medium
            </label>
            <label onClick={e => this.handleLevelPick(e, "hard")} className="btn btn-default">
              <input class="hard" name="level" value="hard" type="radio"/>Hard
            </label>
          </ButtonGroup>

          <ButtonInput className="pull-right" type="submit" value="Save"/>
        </form>
      </div>
    );
  }


  handleGenderPick(e, value) {
    this.gender = value;
  }

  handleLevelPick(e, value) {
    this.level = value;
  }
  
  
  handleSetupFormSubmit(e) {
    e.preventDefault();
    
    const {name, description, link, unit} = this.refs;
    const {gender, level} = this;
    
    const exercise = {
      ownerId: this.props.user._id,
      name: name.getValue(),
      gender,
      description: description.getValue(),
      link: link.getValue(),
      unit: unit.getValue(),
      level
    };

    console.log(exercise);

    const youtubeUrlMatch = exercise.link.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);

    if(youtubeUrlMatch != null) {
      const id = youtubeUrlMatch[1];
      exercise.link = "http://www.youtube.com/embed/" + id;
    }

    const {nameValidation, descriptionValidation, linkValidation, unitValidation} = this.props;
    
    nameValidation(exercise.name);
    descriptionValidation(exercise.description);
    linkValidation(exercise.link);
    unitValidation(exercise.unit);

    this.props.createExercise(exercise, this.resetForm.bind(this));
  }

  resetForm() {
    const labels = ['name', 'description', 'link', 'unit'];
    labels.forEach((label) => {this.refs[label].getInputDOMNode().value = '';});
    this.props.clearState();
  }
}

export default Workout;