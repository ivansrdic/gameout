import React, {Component} from 'react';
import {Input, ButtonInput} from 'react-bootstrap';

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {errors, nameValidation, descriptionValidation, unitValidation} = this.props;
    return (
      <form className="create-exercise" onSubmit={this.handleSetupFormSubmit.bind(this)}>
        <hr/>
        <h1 className="text-center">Create exercise</h1>

        <Input
          id="name"
          ref="name"
          type="text"
          label="Workout name"
          placeholder="Workout name"
          help={errors.nameValidation ? errors.nameValidation.message : ""}
          bsStyle={errors.nameValidation ? errors.nameValidation.status : null}
          onBlur={() => nameValidation(this.refs.name.getValue())}/>

        <Input
          ref="description"
          type="textarea"
          label="Description"
          placeholder="Description"
          help={errors.descriptionValidation ? errors.descriptionValidation.message : ""}
          bsStyle={errors.descriptionValidation ? errors.descriptionValidation.status : null}
          onBlur={() => descriptionValidation(this.refs.description.getValue())}
        />

        <Input
          ref="unit"
          type="text"
          label="Unit"
          placeholder="Unit"
          help={errors.unitValidation ? errors.unitValidation.message : ""}
          bsStyle={errors.unitValidation ? errors.unitValidation.status : null}
          onBlur={() => unitValidation(this.refs.unit.getValue())}
        />

        <ButtonInput className="pull-right" type="submit" value="Save"/>
      </form>
    );
  }
  
  
  handleSetupFormSubmit(e) {
    e.preventDefault();
    
    const {name, description, unit} = this.refs;
    
    const exercise = {
      ownerId: this.props.user._id,
      name: name.getValue(),
      description: description.getValue(),
      unit: unit.getValue()
    };
    
    const {nameValidation, descriptionValidation, unitValidation} = this.props;
    
    nameValidation(exercise.name);
    descriptionValidation(exercise.description);
    unitValidation(exercise.unit);
    
    this.props.createExercise(exercise);

    this.props.onFormSubmit();
  }
}

export default Workout;