import React, {Component} from 'react';
import {Input, ButtonInput} from 'react-bootstrap';
import Message from '../../common/message.jsx';

class Workout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    const {messages, nameValidation, descriptionValidation, linkValidation, unitValidation} = this.props;
    return (
      <div>
        <Message message={messages.globalMessage}/>
        
        <form className="create-exercise" onSubmit={this.handleSetupFormSubmit.bind(this)}>
          <hr/>
          <h1 className="text-center">Create exercise</h1>

          <Input
            id="name"
            ref="name"
            type="text"
            label="Workout name"
            placeholder="Workout name"
            help={messages.nameValidation ? messages.nameValidation.message : ""}
            bsStyle={messages.nameValidation ? messages.nameValidation.status : null}
            onBlur={() => nameValidation(this.refs.name.getValue())}/>

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
            onBlur={() => linkValidation(this.refs.unit.getValue())}
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

          <ButtonInput className="pull-right" type="submit" value="Save"/>
        </form>
      </div>
    );
  }
  
  
  handleSetupFormSubmit(e) {
    e.preventDefault();
    
    const {name, description, link, unit} = this.refs;
    
    const exercise = {
      ownerId: this.props.user._id,
      name: name.getValue(),
      description: description.getValue(),
      link: link.getValue(),
      unit: unit.getValue()
    };
    
    const {nameValidation, descriptionValidation, linkValidation, unitValidation} = this.props;
    
    nameValidation(exercise.name);
    descriptionValidation(exercise.description);
    linkValidation(exercise.link);
    unitValidation(exercise.unit);


    this.props.createExercise(exercise, this.resetForm.bind(this));
  }

  resetForm() {
    for(let ref in this.refs) {
      this.refs[ref].getInputDOMNode().value = ''
    }
  }
}

export default Workout;